// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = ["!", "#", "@", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "?", "/", "<", ">"]
var numbers = ["1","2","3","4","5","6","7","8","9","0"]
var upperCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowerCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


specialCharacters = confirm("Do you want special characters?");
numbers = confirm("Do you want numbers?");
upperCharacters = confirm("Do you want uppercase characters?");
lowerCharacters = confirm('Do you want lowercase characters?');



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
