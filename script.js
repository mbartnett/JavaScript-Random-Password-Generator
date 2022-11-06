// Assignment Code

//generateBtn.onclick = function(){
var generateBtn = document.querySelector("#generate");

let big = ["A","B",];
let little = ["A","B",];
let num = ["A","B",];
let special = ["A","B",];

let possibleChars = [];

function generatePassword (){
  let charCount = window.prompt("How many characters would you like your password to be?");
  if (parseInt)(charCount)< 8 || (parseInt)(charCount)>128
  alert ("Your password must be between 8 and 128 characters.");{
  }
  let uppercase = window.confirm("Would you like to use uppercase letters?");
  let lowercase = window.confirm("Would you like to use lowercase letters?");
  let number = window.confirm("Would you like to use numbers?");
  let specialChar = window.confirm("Would you like to use special characters?");

if(uppercase == false && lowercase == false && number == false && specialChar == false){
    alert ("You need to select at least one character type.");
  }

// if (lowercase =="true"){
// possibleChars = possibleChars.push(letters);
// }

}

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