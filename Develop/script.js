// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables for letters, symbols, uppercase and lowercase
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var symbols = "?"

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
    for (var length = null; length === null || (length < 8 || length > 128) || uppercaseLetters.includes(length) || lowercaseLetters.includes(length); length = length) {
      length = prompt("How long would you like your fantastic password to be? (Minimum of 8, maximum of 128)");
    }
    for (var )
  }

  password = length;
  return password;
}





