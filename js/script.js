$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load

  /*A Pitfall With fadeIn/fadeOut vs. fadeTo
  $(".green-box").fadeOut(1000); // --> with this once it fade out it's actually removed form the layout. In CCS terms this green-box class
  has a style of display: none applied, which is the reason why all the other elements on the page are realign as if that element wasn't 
  there at all. */

  /*In some cases you may want that but in some other cases you may also just want to fade out without being removed from the layout, so we 
  don't want the display to be set to none. You just want the element to be invisible.*/

  /*And this is when the fadeTo function comes in
  $(".green-box").fadeTo(1000, 0); //here is going to fade to opacity 0, so now this has no display none anymore, it's only set the opacity to 0.
  so the element becomes invisible but it's not going to change the arrangement of the other element.*/

  //Example
  $(".green-box").fadeOut(1000);
  $(".green-box").fadeTo(1000, 0.5);
});