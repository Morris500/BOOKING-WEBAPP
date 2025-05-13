import { Router } from "express";
const router = Router();

router.get("/", (req,res) => {
 res.send('hello world')
});
// router("/register", (req, res) => {

// });
// router("/login", (req, res) => {

// });
export default router; 