$(function() {
  // jQuery goes here...

  /*Handling the Submit Event*/
  /*The submit() event it's very useful to perform some final validation where you can go through all the elements
  on the page and see if everything's fine before actually sending that form data to your server.

  So this prevents unnecessary operations on the server, it laso prevents the use of waiting, it prevents the page reload
  and it just provides a better user experience because the user knows right away what's going wrong.*/
  $("#form").submit(function(event){
    var textarea = $("#message");
    if(textarea.val().trim() == ""){
      textarea.css("box-shadow", "0 0 4px #811");
      event.preventDefault();
    } else{
      //form will be submitted
    }
  });

  /*Observation:

  The event object is useful to control the event that happened, here the form submission.
  Without access to the event object, we wouldn't be able to prevent the form from submitting because done 
  using event.preventDefault(). As the name implies, that function prevents the default action that 
  normally occurs with the event -- e.g. form submission.

  Another common example is when you handle the click on a link in JS, you can use event.preventDefault()  
  to stop the link from actually taking the user to the linked page.*/
}); 