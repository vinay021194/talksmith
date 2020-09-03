const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const createData = require("./routes/createData")
const carrierData = require("./routes/api/carrier")
const app = express();
// Bodyparser middleware



app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded()
);

// DB Config

const mongoDB =
    //'mongodb+srv://vikas:vmads@22@cluster0-jaxj2.mongodb.net/local_library?retryWrites=true';
    "mongodb://127.0.0.1:27017/fullStack";

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function () {
    console.log('We are connected to database');
});

app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/createData", createData);
app.use("/api/carrier/", carrierData)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));