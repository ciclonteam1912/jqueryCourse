$(function() {
  // jQuery goes here...

  /*Coding Activity: Fast Feedback Form*/
  var form = $("#form");
  enableFastFeedback(form);

  form.submit(function(event){
    var name = $("#name").val();
    var password = $("#password").val();
    var message = $("#message").val();
    var checkbox = $("#cb").is(":checked");

    validateNameField(name, event);
    validatePasswordField(password, event);
    validateMessageField(message, event);
    validateCheckboxField(checkbox, event);
  });
}); 

function enableFastFeedback(formElement){
  var nameInput = formElement.find("#name");
  var passwordInput = formElement.find("#password");
  var messageInput = formElement.find("#message");
  var checkboxInput = formElement.find("#cb");

  nameInput.blur(function(event){
    var name = $(this).val();
    validateNameField(name, event);

    if(!isValidName(name)){
      $(this).css({
        "box-shadow": "0 0 4px #811", 
        "border": "1px solid #600"
      });
    } else{
      $(this).css({
        "box-shadow": "0 0 4px #181", 
        "border": "1px solid #060"
      });
    }
  });

  passwordInput.blur(function(event){
    var password = $(this).val();
    validatePasswordField(password, event);

    if(!isValidPassword(password)){
      $(this).css({
        "box-shadow": "0 0 4px #811", 
        "border": "1px solid #600"
      });
    } else{
      $(this).css({
        "box-shadow": "0 0 4px #181", 
        "border": "1px solid #060"
      });
    }
  });

  messageInput.blur(function(event){
    var message = $(this).val();
    validateMessageField(message, event);

    if(!isValidMessage(message)){
      $(this).css({
        "box-shadow": "0 0 4px #811", 
        "border": "1px solid #600"
      });
    } else{
      $(this).css({
        "box-shadow": "0 0 4px #181", 
        "border": "1px solid #060"
      });
    }
  });

  checkboxInput.change(function(event){
    var isChecked = $(this).is(":checked");
    validateCheckboxField(isChecked, event);

    if(!isChecked){
      $(this).add("label[for='cb']").css({
        "box-shadow": "0 0 4px #811", 
        "border": "1px solid #600"
      });
    } else{
      $(this).add("label[for='cb']").css({
        "box-shadow": "0 0 4px #181", 
        "border": "1px solid #060"
      });
    }
  });
  /*Some observation here:

  I used add() here to add the label to the selection.

  First, $(this) refers not to the change but to the checkboxInput object itself. 
  So with $(this), we select only the checkbox. We can add more elements to our set of selected elements 
  by using the add()  function. Thus, $(this).add("label[for='cb']") then selects not only the checkbox but also its label, 
  so that both will be highlighted.*/
}

function validateNameField(name, event){
  if(!isValidName(name)){
    $("#name-feedback").text("Please enter at least two characters");
    event.preventDefault();
  }else{
    $("#name-feedback").text("");
  }
}

function validatePasswordField(password, event){
  if(!isValidPassword(password)){
    $("#password-feedback").text("The password should have at least 6 characters and contain a number");
    event.preventDefault();
  }else{
    $("#password-feedback").text("");
  }
}

function validateMessageField(message, event){
  if(!isValidMessage(message)){
    $("#message-feedback").text("Please enter a message");
    event.preventDefault();
  }else{
    $("#message-feedback").text("");
  }
}

function validateCheckboxField(isChecked, event){
  if(!isChecked){
    $("#checkbox-feedback").text("Please agree to this");
    event.preventDefault();
  }else{
    $("#checkbox-feedback").text("");
  }
}

function isValidName(name){
  return name.length >= 2;
}

function isValidPassword(password){
  return password.length >= 6 && /.*[0-9].*/.test(password);
}

function isValidMessage(message){
  return message.trim() != "";
}