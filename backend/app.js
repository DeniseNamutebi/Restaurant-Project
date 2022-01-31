const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config()
const checkJwt = require("./tools/authTools").checkJwt

const menuRoutes = require("./routes/api");
const homeRoutes = require("./routes/home");



//set up express app
const app = express();
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, OPTIONS');
  next();
});

//intialize roots
app.use('/menu', menuRoutes);
app.use('/home', homeRoutes);

/*
// auth router attaches /login, /logout, and /callback routes to the baseURL
const config ={

  baseURL: process.env.ISSUER_BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.BASE_URL,
  secret: process.env.SECRET
};

app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});
*/
// req.isAuthenticated is provided from the auth router
app.get('/test', checkJwt, (req, res) => {
  res.sendStatus(200).send(req?.headers.authorization.split("Bearer ")[1])
});

// This route doesn't need authentication
app.get('/api/public', function(req, res) {
  res.json({
    message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
  });
});

// This route needs authentication
app.get('/api/private', checkJwt, function(req, res) {
  console.log("Private route")
  try{
    console.log("Response", checkJwt)
    res.json({
      message: 'Hello from a private endpoint! You need to be authenticated to see this.'
    
    })
  }
  catch(err){
    console.log("err", err)
    res.sendStatus(401)
  }
});


//error handling 
app.use((err, req, res, next) => {
  res.send({ error: err.message });
});


module.exports = app;