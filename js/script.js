$(function() {
  // jQuery goes here...

  /*Delegated Events*/
  /*The problem is that when you call functions like click(), on() or mouseenter(), then those event handlers will only be attached
  to elements that are already present on the page.

  So if you add new elements dynamically to the page via prepend(), append(), before() or after(), they will not have any event
  handlers.

  Example:
  $("p").click(function(){
    $(this).slideUp();
  });
  $("#content").append("<p>This is dynamically added paragraph.</p>");*/
  /*This dynamically added paragraph will not have the
  event handler that we defined fo all p tags on the page*/

  /*The way to solve this is to use Delegate Events. 
  This means is that you basically define your event handler on some parent element which will always be on the page
  and the that parent element once that event actually occurs well then delegate that event to be handled by its children 
  or descendents.

  Example:*/
  $("#content").on("click", "p", function(){
    $(this).slideUp(); //this will refer to the paragraph tag that was clicked and it's not going to refer to the parent 
    //element
  });
  $("#content").append("<p>This is dynamically added paragraph.</p>");
  /*So now the content div is waiting for the events and once it occurs it's going to delegate them to the paragraph tags.*/

  /*Mini challenge*/
  $("body").on("mouseenter", "li", function(){
      $(this).css("color", "#666");
  });

  /*The parent is listen to the event and then delegate to its children.
  Using delegate events can actually increase the performance of your site. For example, if you have a thousand table rows
  then adding the event of each of those will have a thousand event handlers associated with elements.

  So in those cases it's also more efficient to just use delegate events on a parent element*/
}); 