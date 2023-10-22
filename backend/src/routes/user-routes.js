import { Router } from "express";
import userController from "../controllers/user-controller.js";

/**
 * Esse arquivo serve para aplicar os controllers
 * em sua determinada rota e método. Caso necessite
 * fazer alguma rota a mais, selecione o método e escreva
 * o nome da rota desejada. Ex: userRouter.get("/user/getByCpf", getUserByCpfController)
 */
const userRouter = Router();
const {
  getUserController,
  postUserController,
  putUserController,
  deleteUserController,
} = userController;

userRouter.get("/users", getUserController);
userRouter.post("/users", postUserController);
userRouter.put("/users", putUserController);
userRouter.delete("/users", deleteUserController);

export default userRouter;
