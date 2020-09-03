const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//const keys = require("../../config/keys");
const newCarieer = require("../controllers/carieer")


router.post("/carrier/create/", function (req, res) {
    console.log("this is")
    console.log(req.body);
})

module.exports = router;
