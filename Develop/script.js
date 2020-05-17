// Prompts and Confirms
var passLength = prompt("How many character do you want your password to be? Enter a number between 8 and 20.")

var passLower = confirm("Would you like to include lower case letters in your password?")

var passUpper = confirm("Would you like to include upper case letters in your password?")

var passSpecial = confirm("Would you like special characters in your password?") 

var passNumber = confirm("Would you like a number your password?")
 
var generateBtn = document.getElementById("#generate")

 // generateBtn.onclick = function(){
// Generator funtion 
const passvalues = {
  lower: getlower,
  upper: getupper,
  specialchar: getspecialchar,
  number: getnumber
}


//https://www.w3schools.com/html/html_charset.asp
//get lower case  used 
function getlower(){
  return String.fromCharCode(Math.floor(Math.random() *26)+ 97);
} 
function getupper(){
  return String.fromCharCode(Math.floor(Math.random() *26)+ 65);
} 
function getspecialchar(){
  return String.fromCharCode(Math.floor(Math.random() *10)+ 33);
} 
function getnumber(){
  return String.fromCharCode(Math.floor(Math.random() *10)+ 48);
} 


if(passLength >= 8 && passLength <= 128){
  passLower
  console.log(passLength)
} else {passLength === false
console.log(passLength)};

if(passLower === true){
  passUpper
} else {passLower ===false
console.log(passLower)}

if(passUpper === true){
  passSpecial
} else {passUpper ===false
console.log(passUpper)}

if(passSpecial === true){
  passNumber
} else {passSpecial ===false
console.log(passSpecial)}

if(passNumber === true){
  passNumber
} else {passSpecial ===false
console.log(passSpecial)}

// Write password to the #password input
/*function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
*/
// Add event listener to generate button
generateBtn.addEventListener("click",




//writePassword);
