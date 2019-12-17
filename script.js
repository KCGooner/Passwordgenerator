// Assignment Code
// var generateBtn = document.querySelector("#generate");

// var specialCharacters = ["!", "#", "@", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "?", "/", "<", ">"]
// var numbers = ["1","2","3","4","5","6","7","8","9","0"]
// var upperCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
// var lowerCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


// specialCharacters = prompt("Do you want special characters?");
// numbers = prompt("Do you want numbers?");
// upperCharacters = prompt("Do you want uppercase characters?");
// lowerCharacters = prompt('Do you want lowercase characters?');

function generate() {

  let complexity = 20;

  let password = "";

  let values ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";

  for(var i=0; i <= complexity; i++) {
  password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }
  document.getElementById("password").value = password;
}


// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

//   copyBtn.removeAttribute("disabled");
//   copyBtn.focus();
// }

function copyToClipboard() {
  document.getElementById("password").select();

  document.execCommand("Copy");

  alert("Password copied to clipboard");
  
}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
