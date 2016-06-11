var shodan = {};
var request = require("request");

shodan.search = function(req, callback){
  request
      .get("https://api.shodan.io/shodan/host/search?key=" + this.settings.key + "&query=" + req.param("query"))
      .on("response", function(res){
        // after we got a response from the shodan api we callback it
        callback(res);
      });
}

module.exports = shodan;
