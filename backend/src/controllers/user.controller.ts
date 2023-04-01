import User from "../db/models/User";
import { Op } from "sequelize";
import {Request, Response} from "express";
import Controller from "../interfaces/UserController";

class UserControllerImpl implements Controller {
    public create(req: Request, res: Response)
    {
        if(!req.body.login || !req.body.password)
        {
            res.status(400).json({message: "Content cannot be empty!"});
            return;
        }

        const user = {
            login: req.body.login,
            password: req.body.password,
            isTeacher: req.body.isTeacher
        }

        User.create(user)
            .then(data => {
                res.json({data})
            })
            .catch(err => {
                res.status(500).json({err})
        })
    }
    public findAll(req: Request, res: Response)
    {
        const login = req.query.login;
        const condition = login ? {login: {[Op.like]: `%${login}%`}} : null;

        User.findAll({where: condition})
            .then(data => res.json({data}))
            .catch(err => res.status(500).json({message: err.message || "Error occured while retrieving users"}));
    }
    public findOne(req: Request, res: Response)
    {
        const login = req.params.login;

        User.findByPk(login)
            .then(data => res.json({data}))
            .catch(err => res.status(500).json({message: err.message || "Error occured while retrieving users"}));
    }

    public update(req: Request, res: Response)
    {
        const login = req.params.login;

        User.update(req.body, {where: {login: login}})
            .then(num => {
                if(num.at(0) == 1) {
                    res.json({message: "Sucessfully updated the User"});
                }else {
                    res.json({message: "Cannot update the User with login: " + login})
                }
            })
            .catch(err => res.status(500).json({message: err.message || "Failed to update User"}))
    }

    public async delete(req: Request, res: Response)
    {
      const login = req.params.login;
      console.log("Hi1!")

      await User.destroy({
        where: { login: login }
      })
        .then(num => {
          if (num == 1) {
            console.log("Hi2!")
            res.send({
              message: "User was deleted successfully!"
            });
          } else {
            res.send({
              message: `Cannot delete User with login=${login}. Maybe User was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete User with login=" + login
          });
        });
    }
    public deleteAll(req: Request, res: Response)
    {
        User.destroy({
            where: {},
            truncate: false
          })
            .then(nums => {
              res.send({ message: `${nums} Users were deleted successfully!` });
            })
            .catch(err => {
              res.status(500).send({
                message:
                  err.message || "Some error occurred while removing all Users."
              });
            });
    }
    public findAllTeachers(req: Request, res: Response) {
        User.findAll({where: {isTeacher: true}})
            .then(data => res.json({data}))
            .catch(err => res.status(500).json({data: err.message || "Error occured while retrieving teachers"}))
    }
}

export default new UserControllerImpl();