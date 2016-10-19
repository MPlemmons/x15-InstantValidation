function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  if( userEntered.length < 6){
    //Turn the username green
    //turn the username red
    document.getElementById("usernameGroup").classList.add("has-error");
    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="Username must be at least 6 characters.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
  }
  else if(userEntered.includes(" ")){
      //turn the username red
      document.getElementById("usernameGroup").classList.add("has-error");
      //Show message that there is an error with the username...
      document.getElementById("usernameError").innerHTML="Username must be not contain any spaces.";
      document.getElementById("usernameError").classList.remove("hidden-message");
      document.getElementById("usernameError").classList.add("shown-message");
  }
  else {
  document.getElementById("usernameGroup").classList.add("has-success");
}
var lowerPass = passEntered.toLowerCase();
  if(lowerPass == "password")
  {
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="password cannot be 'password'.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
  }
  else if(passEntered == userEntered) {
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="password cannot be the same as username.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    }
    else if(passEntered.length < 6 || passEntered.length > 20){
      //Turn the password items red
      document.getElementById("passwordGroup").classList.add("has-error");
      //Show message that there is an error with the password...
      document.getElementById("passwordError").innerHTML="password must be between 6 and 20 characters.";
      document.getElementById("passwordError").classList.remove("hidden-message");
      document.getElementById("passwordError").classList.add("shown-message");
    }
  else {
    //Turn the password item green
    document.getElementById("passwordGroup").classList.add("has-success");
  }




}
