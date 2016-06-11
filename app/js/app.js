var stadt = document.querySelector("#stadtname");
var searchButton = document.querySelector("#search")
var count = document.querySelector("#count");

var updateValue = function(json){
  count.innerHTML = json.total;
}

// make a listener to the keyup event
searchButton.addEventListener("click", function(event){
  if(stadt.value != ""){
    ajax().get("api/"+stadt.value)
      .then(updateValue)
      .catch(function(err){
        console.log(err);
      });
  }
});
