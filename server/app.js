import express, { json, urlencoded } from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import Hotel from "./models/hotel.js";

import authrouter from "./api/Routes/auth.js";
// const usersrouter = require("./Routes/users");
import hotelsrouter from "./api/Routes/hotels.js";
// const roomsrouter = require("./Routes/rooms");


const app = express();
const port = 3000;

app.use(cookieParser());
 app.use(json());
 app.use(urlencoded({ extended: true }));


const connect = async () => {
    try {
       const db = mongoose.connect(process.env.MONGODB);
        console.log(db);
        
    } catch (error) {
        console.log(error);
        
    }
}

// //middleware
 app.use("/", authrouter);
// app.use("/user", usersrouter);
 app.use("/hotels", hotelsrouter);
// app.use("/rooms", roomsrouter);

app.use((err,req,res,next) => {
    const errorStatus = err.status || 500;
    const errormessage = err.message || "something went wrong";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errormessage,
        stack: err.stack
    })
})


// const savedHotel= new Hotel().save().then((data) =>{
//     console.log(data);
    
// } )


app.listen(port, ()=>{connect(); console.log(`App listing on port ${port}`);
})