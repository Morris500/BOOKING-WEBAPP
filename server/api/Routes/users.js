import { Router } from "express";
const router = Router();
 
import { update, deleteItem, getAll, getItem } from "../controllers/users.js";


//update
router.put("/:id", update);
//delete  
router.delete("/:id", deleteItem);
//get'
router.get("/:id", getItem);
//get all
router.get("/", getAll);

export default router;