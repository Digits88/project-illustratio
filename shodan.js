/*
 *  This script was made to communicate between the shodan python script and
 *  the node.js backend code. This was done using the node.js child_process module.
 *  written by Adrian Reuter github.com/reuta <reutadri@gmx.de>
 */

var shodan = {};
var exec = require('child_process').exec;

shodan.search = function(req, callback){
  // call the python script and callback its output
  // NOTE: Weird "'" ticks are added to prevent bugs with cities which contain spaces
  exec("python3.5 python_modules/shodanapi.py " + "'" + req.params.city + "'", function(err, stdout, stderr){
    callback(JSON.parse(stdout)); // callback the stdout and convert it to json before that
  });
}

module.exports = shodan;
