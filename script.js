// Assignment Code

// Targeting the password button
var generateBtn = document.querySelector("#generate");
var generatePwd = document.querySelector("#pw");


// Character arrays
let big = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let little = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let spec = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "="];

// Function that generates the password
function generatePassword() {
  let password = ""
  let charCount = window.prompt("How many characters would you like your password to be?");
  if (parseInt)(charCount) < 8 || (parseInt)(charCount) > 128;
  alert("Your password must be between 8 and 128 characters.");
  let uppercase = window.confirm("Would you like to use uppercase letters?");
  let lowercase = window.confirm("Would you like to use lowercase letters?");
  let numeric = window.confirm("Would you like to use numbers?");
  let specialChar = window.confirm("Would you like to use special characters?");
  if (uppercase == false && lowercase == false && numeric == false && specialChar == false) {
    alert("You need to select at least one character type.");
  }
  for (i = 0; i < charCount; i++) {

    if (uppercase === true && password.length < charCount) {
      var randomIndex = Math.floor(Math.random() * 26);
      password = password + big[randomIndex];
    }
    if (lowercase === true && password.length < charCount) {
      var randomIndex = Math.floor(Math.random() * 26);
      password = password + little[randomIndex];
    }
    if (specialChar === true && password.length < charCount) {
      var randomIndex = Math.floor(Math.random() * 12);
      password = password + spec[randomIndex];
    }
    if (numeric === true && password.length < charCount) {
      var randomIndex = Math.floor(Math.random() * 10);
      password = password + num[randomIndex];
    }
  }
  return password;
}

// Function that writes the password to the #password input
function writePassword() {
  var password = generatePassword();
  generatePwd.textContent = password
}

// Adds an event listener to generate button
generateBtn.addEventListener("click", writePassword);


