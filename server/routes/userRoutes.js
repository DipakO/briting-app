import express from "express";
const router = express.Router();
import UserController from "../controllers/userController.js";
import List from "../Data.js";
import checkUserAuth from "../middleware/auth-middleware.js";

router.use("/changepassword", checkUserAuth);
router.use("/loggeduser", checkUserAuth);

router.post("/register", UserController.userRegistration);
router.post("/login", UserController.userLogin);
// router.post(
//   "/send-reset-password-email",
//   UserController.sendUserPasswordResetEmail
// );
router.post("/reset-password/:id/:token", UserController.userPasswordReset);

router.post("/changepassword", UserController.changeUserPassword);
router.get("/loggeduser", UserController.loggedUser);

export default router;
