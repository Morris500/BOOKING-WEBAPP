import express, { json, urlencoded } from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import Hotel from "./models/hotel.js";

import authrouter from "./Routes/auth.js";
// const usersrouter = require("./Routes/users");
import hotelsrouter from "./Routes/hotels.js";
// const roomsrouter = require("./Routes/rooms");


const app = express();
const port = 3000;

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


// const savedHotel= new Hotel().save().then((data) =>{
//     console.log(data);
    
// } )


app.listen(port, ()=>{connect(); console.log(`App listing on port ${port}`);
})