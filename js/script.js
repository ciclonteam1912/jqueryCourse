$(function() {
  // jQuery goes here...

  /*Modularizing Event Handlers (No More Inline Functions)*/
  function logEvent(){ /*You can put this function inside or outside the document ready of jQuery*/
    console.log("Mouse was clicked or key was pressed.");
  }

  $("html").on("click keydown", logEvent);

  /*Mini challenge*/
   var images = [
    "images/laptop-mobile_small.jpg",
    "images/laptop-on-table_small.jpg",
    "images/people-office-group-team_small.jpg"
  ];

  var i = 0;
  var galleryImage = $(".gallery").find("img");
  galleryImage.on("click", switchToNextImage);

  function switchToNextImage() {
    i = (i + 1) % images.length;
    galleryImage.fadeOut(function(){
      galleryImage.attr("src", images[i]).fadeIn();
    });
  }
});