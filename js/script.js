$(function() {
  // jQuery goes here...

  /*jQuery Methods for Traversal
	Here we will get any elements form the page using jQuery functions that allow us to traverse the HTML document.
  */
  // $("#list").find("li").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").parents("div").css("background-color", "rgba(180, 180, 30, 0.8)");//Here will select all the list parents only to the div tag.
  // $("#list").parent().css("background-color", "rgba(180, 180, 30, 0.8)");//Here will select the direct parent of the list element.
  // $("#list").children("li").css("background-color", "rgba(180, 180, 30, 0.8)"); // This will select the direct children of the #list element.

  // $("#list").siblings().css("background-color", "rgba(180, 180, 30, 0.8)");//Here will select all the siblings elements which are on the same level.
  //and having the same parent but not the element itself
  // $("#list").siblings("p").css("background-color", "rgba(180, 180, 30, 0.8)");//Here will select all the p tags that are on the same level
  // $("#list").siblings(":header").css("background-color", "rgba(180, 180, 30, 0.8)");//Here will select all the headers tags that are on the same level
  // $("#list").prev().css("background-color", "rgba(180, 180, 30, 0.8)");//Here will select the previous element
  $("#list").next().css("background-color", "rgba(180, 180, 30, 0.8)");//Here will select the next element
});