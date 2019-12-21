var passwordLength = prompt("How many characters do you want password to be? ");

if(passwordLength <= 7 || passwordLength >= 129) {
  alert("Please input a valid length between 8 and 128 characters.");
} else {
  var sCharacters = confirm("Do you want to use special characters? ");
  var numberz = confirm("Do you want add numbers to password?");
  var uCase = confirm("Do you want to use uppercase letters? ");
  var lCase = confirm("Do you want to use lowercase letters in password? ");
}

let avail =""
let values ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";

if (uCase) {
  avail += values.substring(0,26);
}
if (lCase) {
  avail += values.substring(26,52);
}
if (numberz) {
  avail += values.substring(52,62);
}
if (sCharacters) {
  avail += values.substring(62);
}


function generate() {

  let password = "";

  for(var i=1; i <= passwordLength; i++) {
    password = password + avail.charAt(Math.floor(Math.random() * (avail.length )));
    console.log(password);
  }

  document.getElementById("password").textContent = password;
}

function copyToClipboard() {
  document.getElementById("password").select();

  document.execCommand("Copy");

  alert("Password copied to clipboard");
  
}


