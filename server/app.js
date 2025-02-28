const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const authrouter = require("./Routes/auth");
const usersrouter = require("./Routes/users");
const hotelsrouter = require("./Routes/hotels");
const roomsrouter = require("./Routes/rooms");


const app = express();
const port = 3000;

const connect = async () => {
    try {
        mongoose.connect(process.env.mongo)
    } catch (error) {
        
    }
}

//middleware
app.use("/auth", authrouter);
app.use("/user", usersrouter);
app.use("/hotels", hotelsrouter);
app.use("/rooms", roomsrouter);




app.listen(port, ()=>{console.log(`App listing on port ${port}`);
})