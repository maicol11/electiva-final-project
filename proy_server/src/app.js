const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const {API_VERSION} = require("./config");

const userRoutes = require("./models/routes/user.routes")

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors());

app.use(`/api/${API_VERSION}`, userRoutes);

module.exports = app;