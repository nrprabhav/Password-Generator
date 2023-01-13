// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let passwordLength = 0;
  //Get the length of the password
  while (true) {
    passwordLength = prompt("Enter length of password (a number between 10 and 64)", "10");
    //Check if password is between 10 and 64
    if ((parseInt(passwordLength) < 10) | (parseInt(passwordLength) > 64)) {
      alert("Choose a number between 10 and 64");
    } else {
      break;
    }
  }
  while (true) {
    allowUpper = confirm("Do you want UPPER CASE CHARACTERS in the password?\n(Select OK to allow and Cancel to not allow)");
    allowLower = confirm("Do you want LOWER CASE CHARACTERS in the password?\n(Select OK to allow and Cancel to not allow)");
    allowNumber = confirm("Do you want NUMBERS in the password?\n(Select OK to allow and Cancel to not allow)");
    allowSpecial = confirm("Do you want SPECIAL CHARACTERS in the password?\n(Select OK to allow and Cancel to not allow)");
    if (allowUpper || allowLower || allowNumber || allowSpecial)
      return [passwordLength, allowSpecial, allowNumber, allowLower, allowUpper];
    else
      alert("You need to allow at least one type of character");
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * (arr.length));
  //alert(arr[randomIndex]);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  let passwordOptions = getPasswordOptions();
  let passwordLength = passwordOptions[0];
  let randomPassword = "";
  for (i = 0; i < passwordLength; i++) {
    // Choose which type of character to use
    let characterType = 0;
    while (true) {
      characterType = Math.floor(Math.random() * 4);
      if (passwordOptions[characterType + 1]) {
        break;
      }
    }
    // Choose the character in the particular type
    switch (characterType) {
      case 0:
        randomPassword += getRandom(specialCharacters);
        break;
      case 1:
        randomPassword += getRandom(numericCharacters);
        break;
      case 2:
        randomPassword += getRandom(lowerCasedCharacters);
        break;
      case 3:
        randomPassword += getRandom(upperCasedCharacters);
        break;
    }
  }
  return randomPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);