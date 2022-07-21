 // Assignment code here
// Global Variables
lowAlphabet = "abcdefghijklmnopqrstuvwxyz";
uppAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
specChars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
numSet = "0123456789"

 function generatePassword() {
  // Local Variables
  var password = "";

  
  // Password Length
  var passwordLength = 0;
  passwordLength = prompt(
    "Welcome to Password Generator!\n" +
    "Please enter the length of your desired password,\n" +
    "at least 8 and no more than 128.");
  passwordLength = parseInt(passwordLength, 10);
  if (!((passwordLength >= 8) && (passwordLength <= 128))) {
    alert(
      "Invalid entry, please enter a valid number\n" +
      "greater than or equal to 8 and less than or equal to 128.\n ")
    return;
  } 

  // Character Choices
  var useLowercase = confirm(
    "Would you like lowercase letters in your password?");
  var useUppercase = confirm(
    "Would you like uppercase letters in your password?");
  var useSpecial = confirm(
    "Would you like special characters in your password?" );
  var useNumbers = confirm(
    "Would you like numbers in your password?");
  var choices = [useLowercase, useUppercase, useSpecial, useNumbers];
  console.log(useLowercase);
  console.log(useUppercase);
  console.log(useSpecial);
  console.log(useNumbers);
  console.log(choices);

  // Password Generation

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
