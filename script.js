// Assignment Code

//generateBtn.onclick = function(){
var generateBtn = document.querySelector("#generate");

let big = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let little = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let num = [1,2,3,4,5,6,7,8,9,0];
let spec = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "="];

let possibleChars = [];

function generatePassword (){
  let charCount = window.prompt("How many characters would you like your password to be?");
  if (parseInt)(charCount)< 8 || (parseInt)(charCount)>128
    alert ("Your password must be between 8 and 128 characters.");
  }
  let uppercase = window.confirm("Would you like to use uppercase letters?");
  let lowercase = window.confirm("Would you like to use lowercase letters?");
  let numeric = window.confirm("Would you like to use numbers?");
  let specialChar = window.confirm("Would you like to use special characters?");
  if(uppercase == false && lowercase == false && numeric == false && specialChar == false){
    alert ("You need to select at least one character type.");
  }

if (lowercase == "true"){
possibleChars = possibleChars.push(letters);
}

return possibleChars;

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

/*
Generally, while you are learning to code, it is a good practice to organize your code into sections like this.
At the top of the js file.
Declare and assign variables.
Declare variables and use document getElementById(“HTML id name goes here”) or similar code.
The reason we need the HTML to be saved to a variable is so that we can manipulate it with javascript.
in the middle
Add functions here
Functions allow developers to control what code runs when we want it to run.
at the bottom
event listeners here
Users doing actions creates events in the browser window. Developers can use these user actions to run specific code functions.
...continued from sample work plan
During this Challenge, you will have to make decisions like
Am I going to use Strings, Arrays, Objects, or a combination of all oe some of these things
Your choice will determine what code you will use to randomize and use variables with arrays, strings or objects
Here is a sample plan for a password generator
// console.log('test console message');
// vars
var allCharacters = ['@', '%', '+', '/', '!', '#', '?', '0', '1', '2', '3', '4', 'a', 'b', 'c', 'd', 'e'];
var finalPassword = [];
var tempPassword;
// need some html vars
//functions
function randomizeChars(allCharacters) {
	for (var i = 0; i < allCharacters.length; i++) {
	    tempPassword = allCharacters[Math.floor(Math.random() * allCharacters.length)];
		finalPassword.push(tempPassword);
	}
}
//call function
randomizeChars(allCharacters);
//print password to console
console.log(finalPassword);

*/