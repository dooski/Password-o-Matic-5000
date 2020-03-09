// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate password for writePassword function

function generatePassword(password) {
  if (password !== null) {
    length = prompt("How long would you like your fantastic password to be? (Minimum of 8, maximum of 128")
  }

  password = length;
  return password;
}





