$(function() {
  // jQuery goes here...

  /*Manipulating Attributes and Properties*/
  //attr(), prop(), val() --> for values of inputs elements

  /*Tvar specialLink = $("#special-link");
  console.log(specialLink.attr("href")); his return the value of the href attribute*/

 /* specialLink.attr("href", "https://www.udemy.com"); This set a new value for the href attribute*/

 /*There are some cases you don't want to use the attr() function and that it's when there are some boolean properties in HTML5,
 for example when you add a checkbox to the form, this has a boolean property named checked.

  So other boolean properties are selected for selected tags and disabled that you can use with prop() function*/
  var checkbox = $("input:checkbox");
  /* console.log(checkbox.prop("checked")); This will return the cuurent value of the checkbox, true or false.
  console.log(checkbox.attr("checked")); This will return checked everytime. And that's why you don't want to use the attr() function*/
  console.log(checkbox.prop("checked", false));
  console.log(checkbox.prop("checked")); /*Here will return false*/
  console.log(checkbox.attr("checked")); /*Here will return checked again*/

  var textInput = $("input:text");
  /* console.log(textInput.val()); The val() without parameter you retrieve the value of the input element*/
  textInput.val("Juan Moris"); /*The val() with a parameter you set the input element to a new value*/
  console.log(textInput.val()); 

  var rangeInput = $("input[type='range']"); /*for range type there's no convenience operator in jQuery*/
  console.log(rangeInput.val());

  /*Wherever you have multiple elements selected like $("input:text") you may actually select multiple elements so if you have more 
  than one text input on the page then when you call val(), attr() or prop() on that it's always call implicity call the first. So 
  it's only going to work with one element at a time. It's not gonna return an array with the values of all the elements or something
  like that, it's just going to give you the value of the first text input.

  val()  will return the value of only the first selected element when used to read the current value.
  However, when using val("someValue")  to set the value, it will do this for all the selected elements.
  So what you're experiencing is the normal behavior. Use first()  to only set the first one, or eq(n)  to only set the n-th one.*/
});