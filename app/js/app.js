var stadt = document.querySelector("#stadtname");
var searchButton = document.querySelector("#search")
var count = document.querySelector("#count");

var updateValue = function(json){
  var filtered = json.results.filter(function(result){
    return result.location == stadt.value;
  });
  console.log(filtered);
  count.innerHTML = json.count;
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
