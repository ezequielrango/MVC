const express = require("express");
const path = require("path");
const app = express();
const port = 3030;


// CONFIG

const mainRouter = require("./routers/main");
const aboutRouter = require("./routers/about");

// ROUTING

app.get("/",mainRouter);
app.get("/about",aboutRouter);


// MIDDLEWARES

app.use(express.static("public"));


// SERVER START

app.listen(port,() => console.log(`server on port : ${port}`))