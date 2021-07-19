const express = require("express");
const router = express.Router();

const {about} = require("../controller/aboutController");

router.get("/about",about);

module.exports = router;