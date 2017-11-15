$(function() {
  // jQuery goes here...

  /*Timing Animations Using Callback Functions
    $(".red-box").fadeTo(1000, 0 ,function(){
  	alert("This is the callback: Animation finished");// Once the animation is finished, the callback function is executed. So you can also
  	// use this to time your animations.

  	you can recognize callback functions from the fact that they're passed into another function as a callback 
  	(meaning they're executed after that function finishes).
  });*/

  $(".red-box").fadeTo(1000, 0 ,function(){
  	$(".green-box").fadeTo(1000, 0, function(){
  		$(".blue-box").fadeTo(1000, 0);
  	});
  });

  //$(".red-box").fadeOut(1000).delay(500).fadeIn(1000); //This only works with delays and no with callback functions, because they're only
  //called once the animation has really finished.
});