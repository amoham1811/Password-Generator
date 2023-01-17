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

// global vairables
var validate = false;

//Object Definitions
var userSelections = {
  passwordLength : 0,
  isUpperCase: false,
  isLowerCase: false,
  isNumber: false,
  isSpecial: false,
  Ask_User: function(){
    while (!validate){
      //acquire password length and validate  
      if (this.passwordLength < 10 || this.passwordLength > 64){
        this.passwordLength = prompt("How many characters would you like in the password ?");
        
        if (isNaN(this.passwordLength) || (this.passwordLength < 10 || this.passwordLength > 64) ) {
          alert("Password must be numberic and have lenght between between 10 and 64 characters!");
          this.passwordLength = 0;
        } else{
          this.passwordLength = parseInt(this.passwordLength); 
        }
      } 
      
      //acquire user character type selection and validate
      if (this.passwordLength >= 10 && this.passwordLength <= 64){
          this.isUpperCase = confirm("Are Uppercase letters allowed ?");
          this.isLowerCase = confirm("Are Lowercase letters allowed ?");
          this.isNumber = confirm("Are Numeric characters allowed ?");
          this.isSpecial = confirm("Are special characters allowed ?");

          if(this.isUpperCase||this.isLowerCase||this.isNumber||this.isSpecial){
            validate = true;
          } else{
            alert("You must select at least one character type !")
          }
      }
    }
    return this;
  } 
}
// Function to count number of true choices in user selection - Not required
// function countUserChoices(obj) {
//   var count = 0;
//   for (var choice in obj) {
//       if (obj.hasOwnProperty(choice) && obj[choice] === true) {
//           count++
//       }
//   }
//   return count;
// }

// Function to generate a random number
function getRandomNumber(numb){
  return Math.floor((Math.random() * numb))
}

// Function to prompt user for password options
function getPasswordOptions() {
  var UserChoice = userSelections.Ask_User();  
  return UserChoice;
}

// Function for getting a random element from an array
function getRandom(arr) {
  var charact = arr[getRandomNumber(arr.length)];
  return charact;
}

// Function to generate password with user input
function generatePassword() {
  var passwordOptions = getPasswordOptions ();
  // var counter = countUserChoices(passwordOptions);
  
  // alert(counter);
  var optionArr = [];
  var Password = [];
  var count = 0;
  //construct array of user selected character types
  if (passwordOptions.isLowerCase){
      optionArr[count] = "lowerCasedCharacters";
      count++
    }
  if (passwordOptions.isUpperCase){
      optionArr[count] = "upperCasedCharacters";
      count++
  }
  if (passwordOptions.isNumber){
    optionArr[count] = "numericCharacters";
    count++
  }
  if (passwordOptions.isSpecial){
    optionArr[count] = "specialCharacters";
  }
  var randNumb;
  var ArrName = [];
  //construct password by randomly selecting character types and characters
  for (i=0;i < passwordOptions.passwordLength;i++){
    randNumb = getRandomNumber(count);
    ArrName = optionArr[randNumb];
    switch(ArrName){
      case "lowerCasedCharacters":
          Password[i] = getRandom(lowerCasedCharacters);
          break;
      case "upperCasedCharacters":
          Password[i] = getRandom(upperCasedCharacters);    
          break;
      case "mumericCharacters":
          Password[i] = getRandom(numericCharacters);
          break;
      default:
          Password[i] = getRandom(specialCharacters);    
      }
    // console.log(Password[i]);
  }
  return Password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  
  passwordText.value = password.join(' '); //repalce commas between characters with space
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);