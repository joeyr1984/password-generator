// Assignment Code
var generateBtn = document.querySelector("#generate");

// User Promts
function generatePassword() {
  var passwordLength = 0;
  do {
    passwordLength = prompt("Pick a number between 8-128");
  } while (passwordLength < 8 || passwordLength > 128);

  var numbers = "";
  do {
    numbers = prompt("Y or N ...Do you want your password to include numbers?");
  } while (numbers != "Y" && numbers != "N");


  var passwordUpper = "";
  do {
    passwordUpper = prompt("Y or N ...Do you want your password to include Uppercase?");
  } while (passwordUpper != "Y" && passwordUpper != "N");

  var passwordLower = "";
  do {
    passwordLower = prompt("Y or N ...Do you want your password to include Lowercase?");
  } while (passwordLower != "Y" && passwordLower != "N");

  var specialChar = "";
  do {
    specialChar = prompt("Y or N ...Do you want your password to include specialChar?");
  } while (specialChar != "Y" && specialChar != "N");
  console.log(passwordLength)
  console.log(numbers);
  console.log(passwordUpper);
  console.log(passwordLower);
  console.log(specialChar);
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




