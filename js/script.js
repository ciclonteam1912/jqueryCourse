$(function() {
  // jQuery goes here...

  /*jQuery Methods for Filtering

  */
  // $("#list").find("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").find("li:even").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").children("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li")filter(function(index){ //The function it's going to get the index of the element you're currently working on
  // 	return index % 3 === 1;
  // }).css("background-color", "rgba(180, 180, 30, 0.8)");

  // $("li").first().css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li").last().css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li").eq(4).css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li").eq(-2).css("background-color", "rgba(180, 180, 30, 0.8)");//This will go back to front
  // $("li").not(":first").css("background-color", "rgba(180, 180, 30, 0.8)");
  $("li").not(function(index){
  	return index % 3 === 2;
  }).css("background-color", "rgba(180, 180, 30, 0.8)");


});