var stadtName = document.querySelector("#stadtname");
var count = document.querySelector("#count");

var updateValue = function(json){
  count.innerHTML = json.count;
}

// make a listener to the keyup event
stadtName.addEventListener("input", function(event){
  if(event.target.value != ""){
    ajax().get("api/"+event.target.value)
      .then(updateValue)
      .catch(function(err){
        console.log(err);
      });
  }
});
