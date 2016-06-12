/*
 * This site is the main backend script written in Node.js.
 * Its use is to route the static files and handle our API.
 * written by Adrian Reuter github.com/reuta <reutadri@gmx.de>
 */

var express = require("express");
var shodan = require("./shodan");
var app = express();

// first allow to access the static files inside our app directory
app.use("/app", express.static("app"));

// index route
app.get("/", function(req, res){
  res.sendFile(__dirname + "/app/index.html");    // send back the index.html file
});

app.get("/api/:city", function(req, res){   // when the browser makes an AJAX call to our city API
  // terminal message for Debugging
  //console.log("**SERVER NOTE** Searching for " + req.params.city);
  // request to the shodan site
  shodan.search(req, function(json){
    // send back to browser the json data
    res.json(json);
  });
});

app.listen(3000)  // start our app on port 3000
