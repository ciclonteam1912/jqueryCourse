$(function() {
  // jQuery goes here...

  //Moving elements
  /* $(".blue-box").animate({
   	"opacity": "0"	
  }, 1000); //This would be the same to fadeTo(1000, 0)*/

  //But with custom animations you're free to add any other properties as well
  $(".blue-box").animate({
  	"margin-left": "200px",
  	"opacity": "0",
  	"height": "50px",
  	"width": "50px",
  	"margin-top": "25px"
  }, 1000);

  $("p").animate({
  	fontSize: "20px"
  }, 1000); //This custom animations doesn't work with colors, because jQuery it's not clever enough to transition between the 
  //color correctly
});