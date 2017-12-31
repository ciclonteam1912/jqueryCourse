$(function() {
  // jQuery goes here...

  /*Passing Additional Data to Events*/
  /*Add additional information or addition data to an event*/
  $("#btn-click").click({
    user:  "Juan",
    domain: "moris_juan@hotmail.com"
  }, function(event){ //All the data we pass here is going to be bound to event.data
    greetUser(event.data);
  });

  function greetUser(userdata){
    username = userdata.user || "Anonymous";
    domain = userdata.domain || "example.com";

    alert("Welcome back "+ username + " from " + domain + "!");
  }
}); 