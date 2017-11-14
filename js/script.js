$(function() {
  // jQuery goes here...

  // $(".blue-box").slideUp(2000);//This will make the element disappear and will set the display to none.
  // $(".blue-box").slideDown(2000);

  $(".blue-box").slideToggle(2000);//This is going to slide up the element if it's currently shown and it's gonna slide down 
  // the element if it's currently hidde.

  $("p").hide();
  $("p").slideDown(1000);
});