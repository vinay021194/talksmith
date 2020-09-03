const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//const keys = require("../../config/keys");
const newCarieer = require("../../controllers/carieer")


router.post("/carrier/create/", newCarieer.newCarieer);

router.get("/getallCarrier/", newCarieer.getallCarrier);

router.get("/getCarrier/", newCarieer.getCarrier);

router.get("/carrier/edit/:id", newCarieer.editCarrier);

router.post("/carrier/update/:id", newCarieer.updateCarrier);


module.exports = router;
