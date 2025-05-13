import { Router } from "express";
const router = Router();

//create
router.post("/", async (req, res) =>{

    try {
        const savedHotel= await newHotel.save()
        res.sendStatus(200).json(savedHotel) 
    } catch (error) {
        res.status(500).json(error)
    }
});
//update

//delete

//get

//get all

export default router;