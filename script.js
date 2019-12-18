// Assignment Code
// var generateBtn = document.querySelector("#generate");

// var specialCharacters = ["!", "#", "@", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "?", "/", "<", ">"]
// var numbers = ["1","2","3","4","5","6","7","8","9","0"]
// var upperCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
// var lowerCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


var passwordLength = prompt("How many characters do you want password to be? ");

// function myinput(passwordLength) {
//   var x, number;

//   x = document.querySelector.passwordLength.value;
// }
// if (isNaN((x) || x < 1 || x > 128)) {
//   alert("Input not Valid");
// }

passwordLength.parseInt();



function generate() {

  let complexity = passwordLength;

  let password = "";

  let values ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";

  for(var i=0; i <= complexity; i++) {
  password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length )));
  }
  document.getElementById("password").value = password;
}

function copyToClipboard() {
  document.getElementById("password").select();

  document.execCommand("Copy");

  alert("Password copied to clipboard");
  
}

