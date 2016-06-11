var stadtName = document.querySelector("#stadtname");
var count = document.querySelector("#count");

var updateValue = function(val){
  count.innerHTML = val;
}

// make a listener to the keyup event
stadtName.addEventListener("input", function(event){
  if(event.target.value != ""){
    ajax().get("api/"+event.target.value)
      .then(updateValue)
      .catch(function(res){
        console.log(res);
      });
  }
});
