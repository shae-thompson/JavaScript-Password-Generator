// Assignment code here
var generateBtn = document.querySelector("#generate");

document.querySelector("#generate").addEventListener("click", writePassword);

function generatePassword () {
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

  var finalPassword = [];
  var passwordCreator = [];

  // Pop-up windows for user input
  var confirmLength = window.prompt("How long do you wish your password to be? It can be between 8 and 128 characters.");
  var confirmLowercase = window.confirm("Click OK if you wish to include lowercase letters?");
  var confirmUppercase = window.confirm("Click OK if you wish to inlcude uppercase letters?");
  var confirmNumber = window.confirm("Click OK if you wish to inlcude numbers?");
  var confirmSpecialCharacters = window.confirm("Click OK if you wish to include special characters?");
    
  if(confirmLowercase){
    finalPassword = finalPassword.concat(lowercase);
  }

  if(confirmUppercase){
    finalPassword = finalPassword.concat(uppercase);
  }

  if(confirmNumber){
    finalPassword = finalPassword.concat(number);
  }

  if(confirmSpecialCharacters){
    finalPassword = finalPassword.concat(specialCharacters);
  }

  console.log(finalPassword)

  for (var i = 0; i < confirmLength; i++) {
      
    passwordCreator.push (finalPassword[Math.floor(Math.random() * finalPassword.length)]); 
    }
  
    return passwordCreator.join("") ;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);