var passwordLength = prompt("How many characters do you want password to be? ");

passwordLength.parseInt();

function generate() {

  let passwordsize = passwordLength;

  let password = "";

  let values ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";

  for(var i=0; i <= passwordsize; i++) {
  password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length )));
  }
  document.getElementById("password").value = password;
}

function copyToClipboard() {
  document.getElementById("password").select();

  document.execCommand("Copy");

  alert("Password copied to clipboard");
  
}

