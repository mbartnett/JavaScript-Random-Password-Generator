// Assignment Code

//generateBtn.onclick = function(){
var generateBtn = document.querySelector("#generate");

var charCount;
var uppercase;
var lowercase;
var number;
var specialChar;

function generatePassword (){
  charCount = window.prompt("How many characters would you like your password to be?");
  console.log(charCount);
  IF THEN
}

uppercase = window.confirm("Would you like to use uppercase letters?");
lowercase = window.confirm("Would you like to use lowercase letters?");
number = window.confirm("Would you like to use numbers?");
specialChar = window.confirm("Would you like to use special characters?");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// create an array of the character type
// determine which boxes in the array are selected
// IF selected checkboxes is 0 
// AND the generate button is pressed
// THEN create alert, "You must select at least one character type."
// ELSE continue to generate password 