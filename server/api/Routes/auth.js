import { Router } from "express";
const router = Router();
import { register, login } from "../controllers/auth.js";

router.get("/", (req,res) => {
 res.send('hello world')
});

router.post("/register", register);

router.post("/login", login);
export default router; 