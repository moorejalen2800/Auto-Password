// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){
  console.log("Hey! You Clicked The Botton!")





  return "Generated password will go here"
}


 var numbers = ['0','1','2','3','4','5','6','7','8','9'];
 var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
 var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
 var special = ['@','%','+','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'
 ];

var numbers = ["0123456789"]
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"]
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUV"]
var special = ["@ % + /  ! '# $ ^ ? : ' ) ( } { ] [ ~ - _ ."]



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
