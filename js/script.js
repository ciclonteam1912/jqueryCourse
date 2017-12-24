$(function() {
  // jQuery goes here...

  /*Adding Click Handlers*/
  /*$("#btn-click").click(function(){ // On the click function we pass the function that we want to execute once the element is clicked.
    alert("Button was clicked.");
  });*/

  $("#btn-click").click(function(event){ // The event parameter contain all the information about that event object
    console.log(event);
    alert("Button was clicked.");
  });

  /*Mini challenge*/
  $(".red-box").click(function(){
    $(this).fadeTo(500, 0.5);
  });

  $(".red-box").click(); // This will trigger the click event on the red-box, and it's going to instantly fade to 50%
  // as if the element was clicked.
});