var shodan = {};
var exec = require('child_process').exec;

shodan.search = function(req, callback){
  exec("python3.5 python_modules/shodanapi.py " + req.params.city , function(err, stdout, stderr){
    callback(JSON.parse(stdout));
  });
}

module.exports = shodan;
