$(function() {
  // jQuery goes here...

  //Moving elements
  $(".blue-box").animate({
  	"margin-left": "+=200px" //+= this will just increase the margin you have by 200px
  }, 1000, "linear");// here over 1000 milliseconds jQuery go ahead and add one pixel every 5 milliseconds in linear scale.
  //If you don't pass anything as a third parameter by default is usually 'swing'.
});