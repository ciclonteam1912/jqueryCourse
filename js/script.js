$(function() {
  // jQuery goes here...

  /*The Focus & Blur Events*/
  // focus() is triggered when you go into a text input, and when you press tab or go into another text input it's going to be blur()
  var inputFields = $("input:text, input:password, textarea");
  inputFields.focus(function(){
    $(this).css("box-shadow", "0 0 4px #666");
  });
  /*With this example when i click into one of these elements you're going to get this box-shadow. Here we should also use
  the blur() event to get rid of the box-shadow again because this way it's just going to stay there forever.*/
  inputFields.blur(function(){
    $(this).css("box-shadow", "none");
  });

  /*Mini challenge*/
  $("#name").blur(function(){
    var text = $(this).val();
    if(text.length < 3){
     $(this).css("box-shadow", "0 0 4px #811"); 
   }else{
    $(this).css("box-shadow", "0 0 4px #181");
   }
  });
}); 