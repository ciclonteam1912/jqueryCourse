$(function() {
  // jQuery goes here...

  /*Removing elements and content */
  // $("li").remove();

  /*Mini-challenge. Remove all the direct children of the form element that are not an input of type text, textarea and br tags*/
  // $("form").children().not("input:text, textarea, br").remove();

  /*In contrat to the remove funtion it's going to remember all the data and event handlers that are associated with the removed elements.
  There's a function called detach() which just detaches an element from the page and you can store that element into a variable to be 
  able then later append it to a DOM element*/
  // var detachedListItem = $("li").detach();
  // $("#content").append(detachedListItem);

  /*You can also do the same thing with remove, but the difference is when you were to re append or re-insert an element into the page,
  and that element has some kind of click listener or any other kind of event, jQuery it's not going to remember any of that. So all the
  event handlers and all the associated data are lost.

  So if you want to insert a removed element back into the page, you will probably want to use detach() instead because when you detached it
  jQuery it's not gonna forget all the event handlers that are associated with the element*/

  /*With remove() and detach() also remove all the child elements of the selected element*/

  /*empty() it's going to move everything inside that tag, but it's not going to remove the element itself, it's just going to empty
  everything inside it.*/
  // $("p:first").empty();

  /*Mini-challenge. Empty all the boxes whatever color thay have*/
  $(".red-box, .green-box, .blue-box").empty();
});