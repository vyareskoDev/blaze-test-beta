import {Request, Response} from "express";
import Controller from "./Controller";

export default interface UserController extends Controller {
    findAllTeachers(req: Request, res: Response) : void;
}