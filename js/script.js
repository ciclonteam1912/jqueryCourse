$(function() {
  // jQuery goes here...

  /*Changing the CSS Properties of Elements*/
  $(".gallery").css("display", "none"); //hide()

  /*We can retrieve a value of a property by using only the first parameter*/
  var redBox = $(".red-box");
  console.log(redBox.css("width")); //This will return the unit like in this case the pixels.
  console.log(redBox.width()); //This will return the width (numerical value) withou the unit.

  /*We can set a value property like this*/
  redBox.css("background-color", "#AA7700");
  $("p").css("font-size", "18px");

  redBox.css("width", "+=20px"); // This will increase the element by 20 pixels

  var properties = $("p").css(["font-size", "line-height", "color"]); // Select the values of multiple properties
  console.log(properties); // This will return as an object with a key value pair (Object { font-size: "18px", line-heigth: "21.6px", color: "rgb(0, 0, 0)" })
  console.log(properties["font-size"]);

  redBox.css("user-select", "none"); //This will make not be selectable the text of the red box
  redBox.css("user-select", function(){ // You can use a function too
    return "none";  
  }); 

  redBox.css("background-color", "#AA7700 !important"); //jQuery will ignore all important declarations, so if you want to use
  // this you havet use css classes


});