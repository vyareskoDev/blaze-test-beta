import UserControllerImpl from "../controllers/user.controller";
import Router from "express";

const userRouter = Router();

userRouter.post("/", UserControllerImpl.create);

userRouter.get("/", UserControllerImpl.findAll); 

userRouter.get("/:id", UserControllerImpl.findOne);

userRouter.put("/:id", UserControllerImpl.update);

userRouter.delete("/:id", UserControllerImpl.delete);

userRouter.delete("/", UserControllerImpl.deleteAll)



export default userRouter;