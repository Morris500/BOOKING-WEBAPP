const mongoose = require('mongoose');

const {Schema} = mongoose;

const hotelSchema = new moongoose.Schema({
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
        type: String,
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
        type: [string],
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