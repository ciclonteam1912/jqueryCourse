$(function() {
  // jQuery goes here...

  /*Fetching a Server File with jQuery*/
  /*load() --> This function is specifically designed to retrieve any type of files from your own server very easily, 
  for example like script or HTML files.

  The load() function works in a way that you actually define the element which is then supposed to display that content
  that you retrieve from your server*/
  /*$("#code").load("js/scripts.js"); This will look that file from the server. In this case my local machine and then
  retrieve all the contents from the file and in this case show it in the code element.*/

  $("#code").load("idontexist.php", function(response, status){
    if(status == "error"){
      alert("Could not find idontexist.php ");
    }
    console.log(response);
  });
}); 