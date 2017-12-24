$(function() {
  // jQuery goes here...

  /*Adding Hover Handlers*/
  $("#btn-hover").hover(function(){ // Here the hover event it's going to get twice because the hover event is going to
    alert("Button was hovered."); // be fired when i enter that button and again when the mouse leaves that element
  });

  /*Mini challenge: Select the green-box and when that's hovered change the text to "I was hovered!"*/
  $(".green-box").hover(function(){
    $(this).text("I was hovered!");
  });
});