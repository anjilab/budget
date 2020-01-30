//starting point
// first add  these middle wares :bodyparser,cors,multer,errorhandlers and then routes 
const express = require("express");
const bodyParser = require("body-parser");

var app = express();

// In order to parse the incoming req.body  in  the middlewares to access req.body. we need body-parser

app.use(bodyParser.urlencoded({extended:false})) // it parses application/x-www-form-urlencoded

app.use(bodyParser.json()); // to parse application/json

//cors.cross origin resource sharing

//app.use(cors()) // require cors first and use

// app.use(errorHandlingHere)

//app.set('baseUrl',config.baseUrl) // setting up base url

// finally mount routes
// app.use(routes)

//mount or add server i.e port listening


