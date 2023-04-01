import TestControllerImpl from "../controllers/test.controller";
import Router from "express";

const testRouter = Router();

testRouter.post("/", TestControllerImpl.create);

testRouter.get("/", TestControllerImpl.findAll);

testRouter.get("/:id", TestControllerImpl.findOne);

testRouter.put("/:id", TestControllerImpl.update);

testRouter.delete("/:id", TestControllerImpl.delete);

testRouter.delete("/", TestControllerImpl.deleteAll)



export default testRouter;