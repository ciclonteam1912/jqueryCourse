$(function() {
  // jQuery goes here...

  //Delaying and Chaining Animations
  $(".red-box").fadeTo(1000, 0.2);
  $(".green-box").delay(1000).fadeTo(1000, 0.5);//It will wait 1000 millisecond for execute, and also in this line we already used chaining.
  //Chaining means that when you call a function (delay) on your element and then right after this you call another function.
  $(".blue-box").delay(2000).fadeTo(1000, 0.8).fadeOut().delay(500).fadeIn();

});