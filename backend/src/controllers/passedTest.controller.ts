import {Request, Response} from "express";
import TestController from "../interfaces/TestController";
import IsEmptyObject from "../functions/IsEmptyObject";
import PassedTest from "../db/models/PassedTest";
import Test from "../db/models/Test";
import StatisticsImpl from "../classes/StatisticsImpl";
import checkTests from "../functions/checkTests";
import { v4 as uuidv4 } from "uuid";



class TestCheckControllerImpl implements TestController{
    create(req: Request, res: Response): void
    {
        const testId = req.params.id;
        const content = req.body.content;
        const id = uuidv4();
        const userLogin = req.body.userLogin;
        const timePassed = req.body.timePassed;
        let questionsAmount = 0;
        let rightAnswersAmount = 0;


        const newPassedTest = {
            id,
            userLogin,
            timePassed,
            content
        }
        
        if(IsEmptyObject(content) || !userLogin || !testId) {
            console.log("Hi!")
            res.status(500).json({message: "Content/id/student's login is/are empty."})
            return;
        }

        Test.findByPk(testId)
            .then(test => test.toJSON())
            .then(jsonTest => {
                questionsAmount = jsonTest.content.questions.length;
                rightAnswersAmount = checkTests(content.answers, jsonTest.content.questions, rightAnswersAmount);

                res.json({data: new StatisticsImpl(questionsAmount, rightAnswersAmount, timePassed)})
                //PassedTest.create(newPassedTest);
        }); 
    }

    findAll(req: Request, res: Response): void
    {
        PassedTest.findAll()
            .then(data => res.json({data}))
            .catch(err => res.status(500).json({message: err.message || "Failed to retrieve passed tests"}))
    }
    findOne(req: Request, res: Response): void
    {
      const id = req.params.id;

      PassedTest.findByPk(id)
          .then(data => res.json({data}))
          .catch(err => res.status(500).json({message: err.message || "Error occured while retrieving passed test"}));
    }
    update(req: Request, res: Response): void
    {

    }
    public async delete(req: Request, res: Response)
    {
        const id = req.params.id;

        await PassedTest.destroy({
          where: { id: id }
        })
          .then(num => {
            if (num == 1) {
              res.status(200).json({
                message: `Passed test with id=${id} was deleted successfully!`
              });
            } else {
              res.status(404).json({
                message: `Cannot delete Test with id=${id}. Maybe Test was not found!`
              });
            }
          })
          .catch(err => {
            res.status(500).json({
              message: "Could not delete Test with id=" + id
            });
          });
    }
    public deleteAll(req: Request, res: Response)
    {
      PassedTest.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} passed tests were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all passed tests."
          });
        });
    }
}

export default new TestCheckControllerImpl();