$(function() {
  // jQuery goes here...

  /*Adding MouseEnter & MouseLeave Handlers*/
  $("#btn-hover").hover(function(){ // Here the hover event it's going to get twice because the hover event is going to
    alert("Button was hovered."); // be fired when i enter that button and again when the mouse leaves that element
  });

  /*Mini challenge: Select the green-box and when that's hovered change the text to "I was hovered!"*/
  $(".green-box").hover(function(){
    $(this).text("I was hovered!");
  });

  var blueBox = $(".blue-box");
  /*This has a problem because when you hovered very often the animation queue is going to get all those events and it's going to
  keep fading the blue-box in and out again. To evoid you can use the stop() function*/
  // blueBox.mouseenter(function(){
  //   $(this).stop().fadeTo(500, 0.7);
  // });

  // blueBox.mouseleave(function(){
  //   $(this).stop().fadeTo(500, 1);
  // });

  //hover(handlerIn, handlerOut). This is a shorthand for the mouse events.
  blueBox.hover(function() {
     $(this).stop().fadeTo(500, 0.7);
  }, function(){
    $(this).stop().fadeTo(500, 1);
  });
});