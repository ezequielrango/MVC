const express = require("express");
const app = express();
const path = require("path");


module.exports = {
    index : app.get("/",(req,res) => res.sendFile(path.join(__dirname,"../","views","home.html")))
}