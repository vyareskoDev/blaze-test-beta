import Router from "express";
import TestCheckControllerImpl from "../controllers/passedTest.controller";

const checkTestRouter = Router();

checkTestRouter.post("/check/:id", TestCheckControllerImpl.create);

checkTestRouter.get("/", TestCheckControllerImpl.findAll);

checkTestRouter.get("/:id", TestCheckControllerImpl.findOne);

checkTestRouter.delete("/:id", TestCheckControllerImpl.delete);

checkTestRouter.delete("/", TestCheckControllerImpl.deleteAll)



export default checkTestRouter;