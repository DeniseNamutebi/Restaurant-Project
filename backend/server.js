const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/api");
const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.DB_CONNECTION_STRING;

//Connection to database
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })



//set up express app
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//intialize roots
app.use(routes);

//error handling 
app.use((err, req, res, next) => {

    res.send({error: err.message})
})

//listen for ports and database connection
const server = app.listen(process.env.port || 3001, () => {
  console.log("server is running");


  mongoose.connection.once('open', () => {
      console.log('Connection made')
  }).on('error', (err) => {
      console.log('Connection error', err)
  })
});
