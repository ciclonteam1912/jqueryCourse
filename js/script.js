$(function() {
  // jQuery goes here...

  /*Changing the Data of an Element*/
  var gallery = $(".gallery");

  var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg"
  ];

  gallery.data("availableImages", images); // The way to associate data with the element 
  console.log(gallery.data("availableImages")); // To get the value (it will return the array of images)

  gallery.data("name", "The Awesome Gallery");
  console.log(gallery.data()); // This will return all the data that it's associated with the gallery object

  gallery.removeData("name");
  console.log(gallery.data("name")); //This will return undefined because it was already remove

  var firstPar = $("p:first");
  console.log(firstPar.data("mydata")); //Here we specify the key that we define on the p tag "data-mydata" that it's called data-attributes
  //and it will show thw value of that key that is "some data here"
});