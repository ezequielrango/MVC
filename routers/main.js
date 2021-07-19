const express = require("express");
const router = express.Router();

const {index} = require("../controller/mainController");

router.get("/",index);


module.exports = router;