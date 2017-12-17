$(function() {
  // jQuery goes here...

  /*Coding Activity: Creating an Image Slideshow!*/
  var galleryImage = $(".gallery").find("img").first();
  var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg"
  ];

  var i = 0;
  setInterval(function(){ /*This method is pure javaScript, it's asynchronous*/
    i = (i + 1) % images.length; /*This will create a sequence of 0,1,2 0,1,2 and so on*/
    galleryImage.fadeOut(function(){
      $(this).attr("src", images[i]);
      $(this).fadeIn();
    });
    console.log(galleryImage.attr("src"));
  }, 5000);
});