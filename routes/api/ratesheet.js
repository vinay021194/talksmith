const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//const keys = require("../../config/keys");
const newratesheet = require("../../controllers/ratesheet")


router.post("/ratesheet/create/", newRatesheet.newRatesheet);
router.get("/getCarrier/", newCarieer.getCarrier);


module.exports = router;
