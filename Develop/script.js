// Assignment Code
var generateBtn = document.querySelector("#generate");



// Generator funtion
//get lower case  
function getlower(){
  return String.fromCharCode(Math.floor(Math.random() *26)+ 97);
} 
console.log(String.fromCharCode(Math.floor(Math.random() *26)+ 97)) 

function getupper(){
  return String.fromCharCode(Math.floor(Math.random() *26)+ 65);
} 
console.log(String.fromCharCode(Math.floor(Math.random() *26)+ 65)) 

function getspecialchar(){
  return String.fromCharCode(Math.floor(Math.random() *10)+ 33);
} 
console.log(String.fromCharCode(Math.floor(Math.random() *10)+ 33)) 

function getnumber(){
  return String.fromCharCode(Math.floor(Math.random() *10)+ 48);
} 
console.log(String.fromCharCode(Math.floor(Math.random() *10)+ 48)) 





// Write password to the #password input
/*function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
*/