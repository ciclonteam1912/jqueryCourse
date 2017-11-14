$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load

  //Showing and Hiding Elements.
  //$(".blue-box").hide(); //It's going to set the display value to none.
  //$(".blue-box").show();

  //$(".blue-box").toggle();// this will show all elements that are hidden and it will hide all elements that are already shown.

  $(".blue-box").hide(1000); //This going to be another animation. With this we can see an naimation that is fade out and shrink
  //to the upper left corner
  $(".blue-box").show(1000);
});