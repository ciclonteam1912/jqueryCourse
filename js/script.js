$(function() {
  // jQuery goes here...

/*Replacing elements and content */
// $("li").replaceWith("<li>Replaced</li>");

/*You can pass also either a function or another element that you have on the page*/
  // $("li").replaceWith(function(){
  //   return "<li>Replaced with function</li>";
  // });

/*In here the existing element that we have now used to replace the paragraph is actually moved to a new position.
So it's not cloned by jQuery. Is also consistent with how append(), prepend(), before() and after() functions behave.*/
  var firstListItem = $("li:first");
  // $("p:first").replaceWith(firstListItem);

  /*But when you have a multiple elements that need to be replaced, the jQuery is going to go ahead for the second element and
  it's going to clone this element.

  So to replace the first paragraph jQuery it's just going to move the list item to the new position, but for the second one
  it will actually clone the list item because it just cannot move it again.*/
  $("p").replaceWith(firstListItem);

  /*Mini challenge*/
  // $(".red-box, .blue-box").replaceWith("<div class='green-box'>More Green</div>");

  /*This is like appendTo() and prependTo()*/
  $("<div class='green-box'>More Green</div>").replaceAll(".red-box, .blue-box");
});