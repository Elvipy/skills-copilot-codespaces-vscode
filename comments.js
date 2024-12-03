// Create web server
// npm install express
// npm install body-parser
// npm install mongoose
// npm install ejs
// npm install express-sanitizer
// npm install method-override
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Comments = require("./models/comment");
var methodOverride = require("method-override");
var sanitizer = require("express-sanitizer");

// Connect to mongodb
mongoose.connect("mongodb://localhost/comments_app");

// Set view engine
app.set("view engine", "ejs");

// Set public directory
app.use(express.static("public"));

// Use body-parser
app.use(bodyParser.urlencoded({extended: true}));

// Use express-sanitizer
app.use(sanitizer());

// Use method-override
app.use(methodOverride("_method"));

// Create a comment
app.post("/comments", function(req, res) {
    // Create a comment
    Comments.create({