// Assignment Code

// IF a user clicks the generate button 
// THEN #password-card.display:none;
// THEN #character-card.display:inline;

var generateBtn = document.querySelector("#generate");
var passwordCard = document.getElementById("password-card");
var characterCard = document.getElementById("character-card");

generateBtn.onclick = function () {
  passwordCard.style.display = "none";
  characterCard.setAttribute("style", "display: inline;");
}

// create an array of the character type
// determine which boxes in the array are selected
// IF selected checkboxes is 0 
// AND the generate button is pressed
// THEN create alert, "You must select at least one character type."
// ELSE continue to generate password 




/*
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*/

