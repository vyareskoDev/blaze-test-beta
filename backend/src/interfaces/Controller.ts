import {Request, Response} from "express";

export default interface Controller {
    create(req: Request, res: Response) : void;
    findAll(req: Request, res: Response) : void;
    findOne(req: Request, res: Response) : void;
    update(req: Request, res: Response) : void;
    delete(req: Request, res: Response) : void;
    deleteAll(req: Request, res: Response) : void;
}