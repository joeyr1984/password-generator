// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = prompt("Pick a number between 8-128");

var passwordUpper = prompt("Do you want upper case...y or n?")
if (passwordUpper =="yes")

var passwordLower = prompt("Do you want lower case...y or n?")
if (passwordUpper =="yes")

var specialChar = prompt("Do you want special characters?")
if (specialChar =="yes")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




console.log(passwordLength)
console.log(passwordUpper)
console.log(passwordLower)
console.log(specialChar)