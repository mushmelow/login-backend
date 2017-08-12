"use strict"

//import express library
const express = require("express");
const app = express();
const bodyParser= require("body-parser");
const morgan= require("morgan");
const session= require("express-session");
//

//basic setup for express server
//https://www.tutorialspoint.com/expressjs/expressjs_hello_world.htm



app.get('/', function(req, res){
   res.send("Hello world!");
});

//receive post request from front end api call and send response
app.get('/signup', function(req, res){
   res.send("signup!");
});

app.post('/signup', function(req, res){
   res.send("post signup!");
});

app.get('/login', function (req, res){
  res.send("login page")
})

app.post('/login', function (req,res){
  res.send("post login!");
})

app.listen(3000,console.log("listen to port 3000"));
