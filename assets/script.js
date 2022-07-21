 // Assignment code here
// Global Variables
lowAlphabet = "abcdefghijklmnopqrstuvwxyz";
uppAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
specChars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
numSet = "0123456789"
fullCharSet = [lowAlphabet, uppAlphabet, specChars, numSet];

 function generatePassword() {
  // ===Local Variables=== 
  var password = "";

  // ===Password Length===
  var passwordLength = 0;
  passwordLength = prompt(
    "Welcome to Password Generator!\n" +
    "Please enter the length of your desired password,\n" +
    "at least 8 and no more than 128 characters.");
  passwordLength = parseInt(passwordLength, 10);
  if (!((passwordLength >= 8) && (passwordLength <= 128))) {
    alert(
      "Invalid entry, please enter a valid number that is\n" +
      "greater than or equal to 8 and less than or equal to 128.\n ")
    return;
  } 

  // ===Character Choices===
  var useLowercase = confirm(
    "Would you like lowercase letters in your password?");
  var useUppercase = confirm(
    "Would you like uppercase letters in your password?");
  var useSpecial = confirm(
    "Would you like special characters in your password?" );
  var useNumbers = confirm(
    "Would you like numbers in your password?");
  var choices = [useLowercase, useUppercase, useSpecial, useNumbers];
  var charTypes = 0;
  for (var i = 0; i < choices.length; i++) {
    if (choices[i]) {
      charTypes++;
    }
  }
  if (charTypes === 0) {
    alert(
      "ERROR: Please choose at least one character type."
    )
    return;
  }

  // ===Character Generation Function===
  function generateRandomChar(numChars,charSet) {
    var randChars = "";
    for (var i = 0; i < numChars; i++) {
      randChars = randChars + charSet[Math.floor(Math.random() * charSet.length)];
    }
    return randChars;
  }

  // ===Password Generation====
  // Initial Chars
  if (choices[0]) {
    password = password + generateRandomChar(1,lowAlphabet);
  } 
  if (choices[1]) {
    password = password + generateRandomChar(1,uppAlphabet);
  } 
  if (choices[2]) {
    password = password + generateRandomChar(1,specChars);
  } 
  if (choices[3]) {
    password = password + generateRandomChar(1,numSet);
  } 

  // Set later chars to only use chosen charTypes
  var genSet = [];
  for (var i = 0; i < choices.length; i++) {
    if (choices[i]) {
      genSet = genSet.concat(fullCharSet[i]);
    }
  }

  // Generate later chars
  for (var i = charTypes; i < passwordLength; i++) {
    randGenSet = genSet[Math.floor(Math.random() * genSet.length)];
    password = password + generateRandomChar(1,randGenSet);
  } 

  // ===Randomize Password===
  // Move initially generated chars to a random index in the password
  // Credit to https://bobbyhadz.com/blog/javascript-insert-string-at-index for inserting string code
  var replacedCharIndex = 0;
  for (var i = 0; i < charTypes; i++) {
    replacedCharIndex = Math.floor(Math.random() * (password.length-charTypes)) + charTypes;
    password = password.slice(1,replacedCharIndex) + password.slice(0,1) + password.slice(replacedCharIndex);
  }
  return password;
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
