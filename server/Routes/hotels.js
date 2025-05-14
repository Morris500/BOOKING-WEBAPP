import { Router } from "express";
const router = Router();
import Hotel from "../models/hotel.js" 

//create
router.post("/", async (req, res) =>{

    try {
        const savedHotel= await new Hotel(req.body).save()
        res.sendStatus(200).json(savedHotel) 
    } catch (error) {
        res.status(500).json(error)
    }
});
//update
router.put("/:id", async (req, res) =>{

    try {
        const updateHotel= await new Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.sendStatus(200).json(updateHotel) 
    } catch (error) {
        res.status(500).json(error)
    }
});
//delete  
router.delete("/:id", async (req, res) =>{

    try {
        await new Hotel.findByIdAndDelete(req.params.id)
        res.sendStatus(200).json('hotel delelted') 
    } catch (error) {
        res.status(500).json(error)
    }
});
//get'
router.get("/:id", async (req, res) =>{

    try {
        const hotel = await new Hotel.findByIdAndDelete(req.params.id)
        res.sendStatus(200).json(hotel) 
    } catch (error) {
        res.status(500).json(error)
    }
});
//get all
router.get("/", async (req, res, next) =>{

    try {
        const hotels = await new Hotel.find()
        res.sendStatus(200).json(hotels) 
    } catch (error) {
        next(error);
    }
});

export default router;