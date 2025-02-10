const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send('hello world')
})



app.listen(port, ()=>{console.log(`App listing on port ${port}`);
})