const express = require("express");
const app = express();
const cors = require("cors");
const mongooes = require("mongoose");


app.use(express.json());
app.use(cors());


app.get("/", (req, res)=>{
    res.send("Server is working")
});

module.exports = app;
