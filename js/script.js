$(function() {
  // jQuery goes here...

  /*Retrieving and Changing the Content of an Element*/
  var firstPar = $("p:first");
 // console.log(firstPar.text()); //This will print the actual text of the first paragraph
 // console.log(firstPar.html()) //Here will print all the html tag and also the text of the paragraph

 // firstPar.text("<strong>Hello</strong> World!"); // This will print the tag strong into the page, this will not apply as an html
  //firstPar.html("<strong>Hello</strong> World!"); // Here we can make any html code inside the html()

  /*Mini challenge*/
  firstPar.html(firstPar.html() + " This was just appended.");
});