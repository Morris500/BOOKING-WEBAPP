import User from "../../models/user.js";


//update
const update = async (req, res) =>{

    try {
        const updateusers= await new User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.sendStatus(200).json(updateusers) 
    } catch (error) {
        res.status(500).json(error)
    }
}
//delete
const deleteItem = async (req, res) =>{

    try {
        await new User.findByIdAndDelete(req.params.id)
        res.sendStatus(200).json('hotel delelted') 
    } catch (error) {
        res.status(500).json(error)
    }
}
//get
const getItem = async (req, res) =>{

    try {
        const users = await new User.findByIdAndDelete(req.params.id)
        res.sendStatus(200).json(users) 
    } catch (error) {
        res.status(500).json(error)
    }
}
const getAll = async (req, res, next) =>{

    try {
        const users = await new User.find()
        res.sendStatus(200).json(users) 
    } catch (error) {
        next(error);
    }
}

export { update, deleteItem, getItem, getAll};
