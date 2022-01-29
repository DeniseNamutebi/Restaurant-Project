const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/api");
const mongoose = require("mongoose");

//set up express app
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//intialize roots
app.use(routes);

//error handling 
app.use((err, req, res, next) => {
  res.send({ error: err.message });
});


module.exports = app;