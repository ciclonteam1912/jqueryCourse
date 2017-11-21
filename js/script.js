$(function() {
  // jQuery goes here...

/* append() - 
  Using the append function you can add elements as a CHILD of your selected element.
  And if you have multiple elements selected, with this selector you are going to add a new child for each of those.
  And what the append does is it adds the new element as the last child of your selected elements*/
  // $("ul ul:first").append("<li>I'm gonna be the last sub-item</li>");

/* appendTo() - 
  This is another way to achieve the same effect*/
  // $("<li>I'm gonna be the last sub-item</li>").appendTo($("ul ul:first"));

  /* prepend() - 
    You can use the prepend function to add a new element as the first child*/
  // $("ul ul:first").prepend("<li>I'm gonna be the first sub-item</li>");

  /*If you have multiple elements selected, when you call prepend, it's just going to do that for each of those elements.*/
  // $("ul ul").prepend("<li>I'm gonna be the first sub-item</li>");

/* prependTo() - 
  This is another way to achieve the same effect in opposite way*/
   // $("<li>I'm gonna be the first sub-item</li>").prependTo($("ul ul:first"));
   /*Instead of passing an element inside the function, you can actually make this a little bit easier and just use the selected wihtout the $*/
   // $("<li>I'm gonna be the first sub-item</li>").prependTo("ul ul:first");

   // $("<h4>Juan Moris</h4>").prependTo("#content");

   /*Add new elements as a siblings*/
   /*Here you can pass a new element that you want to have as a next sibling for every red box on the page.
    Son in contrast to the append and prepend functions, you don't have a new child element.*/
   // $(".red-box").after("<div class='red-box'>Antoher Red</div>"); //There also is afterTo() function
   // $(".blue-box").before("<div class='blue-box'>Blue Friend</div>"); //There also is beforeTo() function
   
   /*You can also pass a function instead of selectors and elements, that's going to return your new element to be inserted.*/
   // $(".blue-box").before(function(){
   //  return "<div class='blue-box'>Blue 2</div>";
   // });



    /*You can returned the string of the HTML code or you can return the element right away. So you could select some element,
    that you already know and then you could return that element*/
   // $(".blue-box").before(function(){
   //  return $("some element that already exist");
   // });

   /*You can also pass elements straight away. So instead of passing a string of HTML code you can also pass an element.
   This approach behaves a little bit differently, because when passing the element right away it's actually not
   gonna clone that element and add that to a new position, instead it's going to move the element where you wanted to have
   it inserted, so it would not be in it's origin position anymore.

   You're not adding a new element, you're not creating a new element, you're actually telling jQuery to move the element to 
   the new position*/
   // $(".blue-box").before($(".red-box"));
   /*Another example.
   In this case jQuery has to clone this list at least one because of the multiple selectors, so it will only move the original
   list once, but for the second, third, fourth and so on jQuery is going to have to actually clone that list.*/
   // $("p").after($("#list"));

   /*Mini challenge*/
   $(".red-box").after("<div class='red-box'>Red Box 2</div>");
   $(".green-box").after("<div class='green-box'>Green Box 2</div>");
   $(".blue-box").after("<div class='blue-box'>Blue Box 2</div>");
});