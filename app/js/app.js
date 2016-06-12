/*
 * This is the frontend code which handles the API requests for our search
 * written by Adrian Reuter github.com/reuta <reutadri@gmx.de> 
 */


// select our html nodes for the search for city names
var stadt = document.querySelector("#stadtname");
var searchButton = document.querySelector("#search")
var count = document.querySelector("#count");


// our function which updates the value of servers
var updateValue = function(json){
  count.innerHTML = json.total;
}

// make a listener to the keyup event
searchButton.addEventListener("click", function(event){
  // prevent the empty query bug
  if(stadt.value != ""){
    // do an ajax request using the ajax.min.js library
    ajax().get("api/"+stadt.value)
      .then(updateValue)  // after the request send the count to the updateValue function
      .catch(function(err){
        console.log(err); // if there's an error then log it
      });
  }
});
