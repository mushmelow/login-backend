"use strict"

//import express library
const express = require("express");
const app = express();
const bodyParser= require("body-parser");
const morgan= require("morgan");
const session= require("express-session");
const Query = require('./Query');
const mysql = require('promise-mysql');
//

//basic setup for express server
//https://www.tutorialspoint.com/expressjs/expressjs_hello_world.htm

// parse incoming requests
app.use(bodyParser.json());


 // create a connection to the DB
   const connection = mysql.createPool({
       host     : 'localhost',
       user     : 'root',
       password : 'password',
       database: 'chat_box',
       connectionLimit: 10
   });

   // create a query object. we will use it to insert new data
  let query = new Query(connection);

  // query.test().then(function(data){
  //  console.log(data);
  // });



app.get('/', function(req, res){
   res.send("Hello world!");
});

//receive post request from front end api call and send response
app.get('/signup', function(req, res){

});


app.post('/signup', function(req, res){

 // parse data and create a new object
  let body = req.body;
  //console.log("body",body)
  let user = {

    email: body.email,
    password: body.password,
    username: body.username
  };
  query.createUser(user).then(function(data){
   console.log(data)
   return res.send("success")
  });
});

app.get('/login', function (req, res){
  res.send("login page")
})

app.post('/login', function (req,res){
  res.send("post login!");
})



app.listen(3000,console.log("listen to port 3000"));
