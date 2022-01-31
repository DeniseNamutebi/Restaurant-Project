const app = require("./app");
require("dotenv").config();
const uri = process.env.DB_CONNECTION_STRING;
const mongoose = require("mongoose");


//Connection to database
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })


//listen for ports and database connection
const server = app.listen(process.env.PORT || 3001, () => {
  console.log("server is running");


  mongoose.connection.once('open', () => {
      console.log('Connection made')
  }).on('error', (err) => {
      console.log('Connection error', err)
  })
});
