import express from "express";
const router = express.Router();
import { welcome } from "../../controllers/user/userController";

router.get("/welcome", welcome);
export default router;
