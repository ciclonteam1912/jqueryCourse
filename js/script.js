$(function() {
  // jQuery goes here...

  /*Handling KeyDown & KeyUp Events*/

  //keypress() - EVIL! There's no official specification and it's just not cross-browser compatible
  $("html").keydown(function(event){
    console.log(event.which); //which it's gonna tell you which key was pressed. This will not work with the keypress() event
  });

  /*Mini Challenge*/
  var AROW_RIGHT = 39;
  $("html").keydown(function(event){
    if(event.which == AROW_RIGHT){
      $(".blue-box").stop().animate({
        marginLeft: "+=10px"
      }, 50);
    }
  });
}); 