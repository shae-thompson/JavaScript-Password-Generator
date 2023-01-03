// Assignment code here
var generateBtn = document.querySelector("#generate");

document.querySelector("#generate").addEventListener("click", writePassword);

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

// Pop-up windows fro user input 
var generatePassword = function() {
  var confirmLength = window.prompt("How long do you wish your password to be? It can be between 8 and 128 characters.");
    if (confirmLength <= 8 || confirmLength >=128) {
      window.alert("Password must be between 8 and 128 characters.")
      var confirmLength = window.prompt("How long do you wish your password to be? It can be between 8 and 128 characters.");
    }

  var confirmLowercase = window.confirm("Click OK if you wish to include lowercase letters?");
  var confirmUppercase = window.confirm("Click OK if you wish to inlcude uppercase letters?");
  var confirmNumber = window.confirm("Click OK if you wish to inlcude numbers?");
  var confirmSpecialCharacters = window.confirm("Click OK if you wish to include special characters?");
    
  if(confirmUppercase === false && confirmLowercase === false && confirmNumber === false && confirmSpecialCharacters === false) {
      window.alert("You must choose at least on character type, please try again.")
      var confirmLowercase = window.confirm("Click OK if you wish to include lowercase letters?");
      var confirmUppercase = window.confirm("Click OK if you wish to inlcude uppercase letters?");
      var confirmNumber = window.confirm("Click OK if you wish to inlcude numbers?");
      var confirmSpecialCharacters = window.confirm("Click OK if you wish to include special characters?");
    }
  }

  // Combine arrays based on choices made above
  var passwordCharacters = {
    if (confirmLowercase === true) {
      password = password.concat(lowercase);
    }

    if (confirmUppercase === true) {
      password = password.concat(uppercase);
    }

    if (confirmNumber === true) {
      password = password.concat(number);
    }

    if (confirmSpecialCharacters === true) {
      password = password.concat(specialCharacters);
    }
  }

  // Create a random generator for character types selected by user and chose random characters for the number of characters required
  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * confirmLength)];
  }

  // Display random characters as password on screen to be copied 
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password")
    
    passwordText.value = password;
  }

  