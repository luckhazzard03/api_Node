import { Router } from "express";
import UserController from "../controllers/user.controller.js";
import UserScheme from "../schemes/user.schema.js";
import userMiddleware from "../middlewares/user.middlewares.js";
import verifyToken from "../middlewares/jwt.middleware.js";

const router=Router();

router.post('/user',userMiddleware(UserScheme.createUser), UserController.createUser);
router.get('/user',verifyToken,UserController.showUser);
router.get('/user',verifyToken,UserController.showUserId);
router.put('/user',verifyToken,userMiddleware(UserScheme.createUser),UserController.updateUser);
router.delete('/user',verifyToken,UserController.deleteUser);
router.post('/user/login',UserController.loginUser);

export default router;