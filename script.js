// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = ["!", "#", "@", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "?", "/", "<", ">"]
var numbers = ["1","2","3","4","5","6","7","8","9","0"]
var characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

// var confirmSpecial = confirm("Do you want special characters?");
// var confirmNumber = confirm("Do you want numbers?");
// var confirmCharacters = confirm("Do you want characters?");

if (confirmSpecial) {
  
}

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
