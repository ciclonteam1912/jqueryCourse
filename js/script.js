$(function() {
  // jQuery goes here...

  /*Using the Change Event*/
  //This is for checkbox elements
  $("#cb").change(function(){
    var isChecked = $(this).is(":checked"); //.prop("checked")
    if(isChecked){
      $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #181");
    }else{
      $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #811");
    }
  });
  
  /*Some observations
  When you select a checkbox, prop("checked") and is(":checked")  do the same thing: they check whether the checkbox is 
  currently checked. They do not change the checkbox state themselves, they just return true/false to indicate whether it is checked. 
  I prefer is(":checked")  because I find it more readable (the code reads "if checkbox is checked...")

  In general, jQuery often has two variants of one function:

  1) Function with only one argument to retrieve the value: function foo(element) 
  2) Function with two arguments to set the value: function foo(element, value) 

  This is the case for attr(), prop(), text(), html() and so on.
  */


  /*Mini challenge*/
  //This is for selected elements
  $("#selection").change(function(){
    var selectedOption = $(this).find(":selected").text();  //This is going to get all the selected elements
    alert(selectedOption);
  });
}); 