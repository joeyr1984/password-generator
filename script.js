// Assignment Code
var generateBtn = document.querySelector("#generate");
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
    ).concat(
        arrayFromLowToHigh(91, 96)
    ).concat(
        arrayFromLowToHigh(124, 126)
    )
 
// User Promts
function userPrompts(){
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
return {
  passwordLength: passwordLength,
  numbers: numbers,
  passwordUpper: passwordUpper,
  passwordLower: passwordLower,
  specialChar: specialChar
   }
}
function generatePassword() {
  var passwordCriteria = userPrompts();
  console.log(passwordCriteria);
  var asciiCodes = [];
  if (passwordCriteria.numbers =="Y"){
    asciiCodes = asciiCodes.concat(NUMBER_CHAR_CODES);
  }
  if (passwordCriteria.passwordUpper =="Y"){
    asciiCodes = asciiCodes.concat(UPPERCASE_CHAR_CODES);
  } 
  if (passwordCriteria.passwordLower =="Y"){
    asciiCodes = asciiCodes.concat(LOWERCASE_CHAR_CODES);
  } 
  if (passwordCriteria.specialChar =="Y"){
    asciiCodes = asciiCodes.concat(SYMBOL_CHAR_CODES);
  } 
  
  const passwordCharacters = []
  for (let i = 0; i < passwordCriteria.passwordLength; i++) {
    const characterCode = asciiCodes[Math.floor(Math.random() * asciiCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  return passwordCharacters.join('')
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}
function arrayFromLowToHigh(low, high){
  const array = []
  for (let i = low; i <= high; i++){
  array.push(i)
}
return array
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




