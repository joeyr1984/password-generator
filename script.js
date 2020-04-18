// Assignment Code
var generateBtn = document.querySelector("#generate");

// User Promts
var passwordLength = 0;
do {
  passwordLength = prompt("Pick a number between 8-128");
}while(passwordLength < 8 || passwordLength > 128);

var numbers = prompt("Y or N ...Do you want your password to include numbers?")
if (numbers =="y" || numbers =="Y") {
  
  console.log("this is a yes")
}
else if (numbers =="n" || numbers =="N"){

}
var passwordUpper = prompt("Y or N ...Do you want upper case")
//if (passwordUpper =="y")

var passwordLower = prompt("Y or N ...Do you want lower case")
//if (passwordLower =="y")

var specialChar = prompt("Y or N ...Do you want special characters?")
//if (specialChar =="y")

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