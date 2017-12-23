$(function() {
  // jQuery goes here...

  /*Adding or removing CSS Classes*/
  $("a").addClass("fancy-link"); // This will add a class fancy-link defined in the css file. It's exactly the same that class="..."
  $("p:first").addClass("large emphasize"); // To add multiple classes

  $("li li").addClass(function(index){
    $(this).addClass("item-" + index);
  });

  $("div").addClass(function(index, currentClass){ //This will look for al the div classes and if it's equal to dummy it will
    if(currentClass === "dummy"){ // change to a red-box class
      return "red-box";
    }
  });

  //$(".red-box").removeClass().addClass("blue-box"); //This will replace the red-box class to a blue-box class.

  /*Mini challenge: remove the Dummy class and add the green-box class*/
  //$(".dummy").removeClass().addClass("green-box");
  $(".dummy").removeClass("dummy").addClass("green-box"); 
});