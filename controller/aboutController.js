const express = require("express");
const app = express();
const path = require("path");


module.exports = {
    about : app.get("/about",(req,res) => res.sendFile(path.join(__dirname,"../","views","about.html")))
}