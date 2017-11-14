$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
  // $(".red-box").fadeOut(2000); // 2000 milliseconds or 2 seconds
  // $(".red-box").fadeOut(); // by default is 400 milliseconds
  // $(".red-box").fadeOut("slow"); // 600 milliseconds
  // $(".red-box").fadeOut("fast"); // 200 milliseconds
  // $(".green-box").fadeOut(2000);

  //Fade In
  // $(".red-box").fadeIn(2000);

  //Fade To
  $(".red-box").fadeTo(3000, 0.2); // fisrt argument is the duration and the second is the opacity you want to fade to.
  $(".green-box").fadeTo(2000, 0.5);
  $(".blue-box").fadeTo(1000, 0.8);

  //Fade Toggle
  $(".red-box").fadeToggle(); //jQuery also takes care of fading the element back into the opacity that it had before. In this case it fade out
  $(".red-box").fadeToggle(); // and then fade in to the opacity that it had before that is 20%
});