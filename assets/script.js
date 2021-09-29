// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declaring Password Data Arrays Globally
const lettersArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const specialArray = [
  "+",
  "-",
  "&&",
  "||",
  "!",
  "(",
  ")",
  "{",
  "}",
  "[",
  "]",
  "^",
  "~",
  "*",
  "?",
  ":",
];

// Variables for user inputs to be passed into getCriteria
let passwordLengthInput;
let uppercaseInput;
let lowercaseInput;
let specialsInput;
let numbersInput;

// Function to take user criteria for password
const getCriteria = function () {
  // Prompt - password length: => 8 & 128 <= && check within range && convert to integer
  // x4 function prompts for each criteria - are these functions created within getCriteria or determined outside and called within?
  // const confirmLowercase
  // const = confirmUppercase
  // const = confirmNumeric
  // const = confirmSpecialCharacters
  //If all Prompt input = False - return user error
  // if all 'confirm' = False = alert & break
  // if all 'confirm' = TRUE, return Store user input into an object
  // const confirmedCriteria = {length: 21, lower: confirmLowerCase etc}
};

// Function to generate password - pass in confirmedCriteria
function generatePassword(confirmedCriteria) {
  // choices = confirmedCtieria values that are true
  // const getRandomValue = function() to generate random values from arrays
  // for (let i = 0; i < lettersArray.length; i++) {
  //   uppercase += lettersArray.[i];
  // return const userPassword = []
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
