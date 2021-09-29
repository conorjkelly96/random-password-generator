// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declaring Password Data Arrays Globally
const upperLettersArray = [
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
];

const lowerLettersArray = [
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

// Get User Inputs - Password Length
const getPasswordLength = function () {
  const userLengthInput = prompt("Please enter a password length");
  const passwordLength = parseInt(userLengthInput, 10);
  if (passwordLength < 8 && passwordLength > 125) {
    return alert(
      "The password length must be between 8 and 125 characters. Please try again."
    );
  } else return passwordLength;
};

// Get User Inputs - upper case
const getUppercaseInput = function () {
  const uppercaseInput = confirm("Do you require an Uppercase Character?");
  return uppercaseInput;
};

// Get User Inputs - lower case
const getLowercaseInput = function () {
  const lowercaseInput = confirm("Do you require a Lowercase Character?");
  return lowercaseInput;
};

// Get User Inputs - specials
const getSpecialsInput = function () {
  const specialsInput = confirm("Do you require a Special Character?");
  return specialsInput;
};

// Get User Inputs - numbers
const getNumbersInput = function () {
  const numbersInput = confirm("Do you require a Number?");
  return numbersInput;
};

// Function to take user criteria for password
const getCriteria = function () {
  const confirmPasswordLength = getPasswordLength();
  const confirmLowercase = getLowercaseInput();
  const confirmUppercase = getUppercaseInput();
  const confirmNumbers = getNumbersInput();
  const confirmSpecials = getSpecialsInput();
  const passwordCriteria = {
    passwordLength: confirmPasswordLength,
    lowercase: confirmLowercase,
    uppercase: confirmUppercase,
    numbers: confirmNumbers,
    specials: confirmSpecials,
  };
  return passwordCriteria;
  // TO DO - IF ALL CONDITIONS ARE FALSE, THEN SHOW "YOU HAVE SELECTED NO CONDITIONS, TRY AGAIN"
};

// Function to generate password - pass in confirmedCriteria
function generatePassword() {
  const criteria = getCriteria();
  console.log(criteria);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log("testing the browser");
