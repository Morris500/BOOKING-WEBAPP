import mongoose from 'mongoose';

const hotelSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }, 
    city:{
        type: String,
        required: true
    }, 
    address:{
        type: String,
        required: true
    }, 
    distance:{
        type: String,
        required: true
    }, 
    photos:{
        type: [String],
        required: true
    }, 
    desc:{
        type: String,
        required: true
    }, 
    ratings:{
        type: Number,
        min: 0,
        max:5
    }, 
    rooms:{
        type: [String],
    },   
    cheapestPrice:{
        type: Number,
        required: true
    }, 
    features:{
        type: Boolean,
        default:false, 
    }, 
})

export default mongoose.model("Hotel", hotelSchema);  