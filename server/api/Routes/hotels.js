import { Router } from "express";
const router = Router();
 
import { create, update, deleteItem, getAll, getItem } from "../controllers/hotel.js";

//create
router.post("/", create );
//update
router.put("/:id", update);
//delete  
router.delete("/:id", deleteItem);
//get'
router.get("/:id", getItem);
//get all
router.get("/", getAll);

export default router;