import Test from "../db/models/Test";
import { Op } from "sequelize";
import {Request, Response} from "express";
import TestController from "../interfaces/TestController";
import IsEmptyObject from "../functions/IsEmptyObject";
import {v4 as uuidv4} from "uuid";


class TestControllerImpl implements TestController{
    create(req: Request, res: Response): void {
        const content = req.body.content;
        const authorLogin = req.body.authorLogin;
        const title = req.body.title;
        const id = uuidv4();

        if(IsEmptyObject(content) || !authorLogin || !title) {
            res.status(500).json({message: "One or multiple required fields are empty."})
            return;
        }

        const newTest = {
            id,
            title,
            authorLogin,
            content
        }

        Test.create(newTest)
            .then(msg => res.json({message: msg}))
            .catch(err => res.status(500).json({message: err}))
    }

    findAll(req: Request, res: Response): void {
        Test.findAll()
            .then(data => res.json({data}))
            .catch(err => res.status(500).json({message: err.message || "Failed to retrieve tests"}))
    }
    findOne(req: Request, res: Response): void {
        const id = req.params.id;
        Test.findByPk(id)
            .then(data => res.json({data}))
            .catch(err => res.status(500).json({message: err.message || "Error occured while retrieving test"}));
    }
    update(req: Request, res: Response): void {
        const id = req.params.id;

        Test.update(req.body, {where: {id: id}})
            .then(num => {
                if(num.at(0) == 1) {
                    res.json({message: "Sucessfully updated the Test"});
                }else {
                    res.json({message: "Cannot update the Test with id: " + id})
                }
            })
            .catch(err => res.status(500).json({message: err.message || "Failed to update the Test"}))
    }
    public async delete(req: Request, res: Response)
    {
      const id = req.params.id;

      await Test.destroy({
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.status(200).json({
              message: "Test was deleted successfully!"
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
        Test.destroy({
            where: {},
            truncate: false
          })
            .then(nums => {
              res.send({ message: `${nums} Tests were deleted successfully!` });
            })
            .catch(err => {
              res.status(500).send({
                message:
                  err.message || "Some error occurred while removing all Tests."
              });
            });
    }

}

export default new TestControllerImpl();