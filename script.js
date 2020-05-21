//Click Generate Button
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

var generateBtn = document.querySelector("#generate");
generateBtn.onclick = function () {
  var password = "";
  var length = "";
  
  //var upper = getupper();
  //var lower = getlower();
  //var specialchar = getspecialchar();
  //var number = getnumber();
  var selectedcharacters = [

  ]
  // Prompts and confirms

  passLength = prompt(
    "How many character do you want your password to be? Enter a number between 8 and 128."
  );

  passLower = confirm(
    "Would you like to include lower case letters in your password?"
  );

  passUpper = confirm(
    "Would you like to include upper case letters in your password?"
  );

  passSpecial = confirm("Would you like special characters in your password?");

  passNumber = confirm("Would you like a number your password?");

  

  // Generator funtion lower, upper, number and special characters
  //https://www.w3schools.com/html/html_charset.asp
  /*
  function getlower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  function getupper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  function getspecialchar() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 33);
  }
  function getnumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }*/

  // Ifs
  if (passLength < 8 || passLength > 128) {
    alert("Your password must be between 8 and 128");
  } else {
  //  passLower;
  }

  if (passLower === true) {
    ;
  }

  if (passUpper === true) {
    passSpecial;
  }

  if (passSpecial === true) {
    passNumber;
  }

  if (passNumber === true) {
    passNumber;
  }

  // for loop
  var randomCharacter = "";

  for (var i = 0; i < passLength; i++) {
    randomCharacter = randomCharacter + lower + upper + number + specialchar;
    password = randomCharacter;
  }
  //alert(randomCharacter);
  console.log(password);

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
};
