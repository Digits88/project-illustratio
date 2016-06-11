var express = require("express");
var shodan = require("./shodan");
shodan.settings = {
  key: "I0eJHqlXu2cAwx99XA8LgKcgf6VvhOrt"
}
var app = express();

app.get("/api", function(req, res){
  shodan.search(req, function(apiResponse){ // search through shodan's api
    console.log(apiResponse);
    res.send(apiResponse);   // after the request send it back to the client
  });
});

app.listen(3000)  // start our app on port 3000
