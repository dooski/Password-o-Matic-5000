// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables for letters, symbols, uppercase and lowercase
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "[", "]", "{", "}", "<", ">"]

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
  // paramater collection
  if (password !== null) {
    for (var length = null; length === null || (length < 8 || length > 128); length = length) {
      length = prompt("How long would you like your fantastic password to be? (Minimum of 8, maximum of 128)");
    }
    lowercase = confirm("Should your fantastic password include lowercase letters?")
    uppercase = confirm("Should your fantastic password include uppercase letters?")
    numeric = confirm("Should your fantastic password include numerals?")
    special = confirm("Should your fantastic password include special characters?")
    // validity check
    if (lowercase === false && uppercase == false && numeric === false && special === false) {
      alert("Error: At least one character type must be accepted for your fantastic password")
      writePassword()
    }
    // password generation
    // options chosen array
    var options = []
    if (lowercase === true) {
      newLength = options.push("lowercase")
    }
    if (uppercase === true) {
      newLength = options.push("uppercase")
    }
    if (numeric === true) {
      newLength = options.push("numeric")
    }
    if (special === true) {
      newLength = options.push("special")
    }

    // length of password; loop runs for the amount of characters chosen

    for (var i = 0; i < length; i++) {
      // determines type for individual character; x is random number used to determine type
      var x = Math.floor(Math.random() * options.length);
      var characterType = options[x];
      console.log(characterType);
      // lowercase; y is random number used to determine value for each character; z is actual character
      if (characterType === "lowercase") {
        var y = Math.floor(Math.random() * lowercaseLetters.length);
        var z = lowercaseLetters[y];
      }
      // uppercase
      if (characterType === "uppercase") {
        var y = Math.floor(Math.random() * uppercaseLetters.length);
        var z = uppercaseLetters[y];
      }
      // number
      if (characterType === "numeric") {
        var z = Math.floor(Math.random() * 10);
      }
      //special
      if (characterType === "special") {
        var y = Math.floor(Math.random() * specialCharacters.length);
        var z = specialCharacters[y];
      }
      console.log(z)
    }
  }

  password = z
  return password;
}





