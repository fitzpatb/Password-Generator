// Assignment Code
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nums = "0123456789";
var spec = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var possibilities = "";
  var passLength = prompt("How long do you want the password? Must be between 8-128 characters?");
  var answer = ""
  if (!passLength) {
    alert("Please choose a number between 8-128.")
  } else if (passLength < 8 || passLength > 128) {
    alert("Number must be between 8-128.")
  } else {
    var lowCase = confirm("Password to contain lowecase letters?");
    var upCase = confirm("Password to contain uppercase letters?");
    var numChars = confirm("Password to contain numbers?");
    var specChars = confirm("Password to contain special characters?")
  };

  if (lowCase && upCase && numChars && specChars) {
    for (var i = 0; i < 1; i++) {
      answer += lower.charAt(Math.floor(Math.random() * lower.length));
    }
    for (var j = 0; j < 1; j++) {
      answer += upper.charAt(Math.floor(Math.random() * upper.length));
    }
    for (var k = 0; k < 1; k++) {
      answer += nums.charAt(Math.floor(Math.random() * nums.length));
    }
    for (var l = 0; l < 1; l++) {
      answer += spec.charAt(Math.floor(Math.random() * spec.length));
      console.log(answer);
    }
    possibilities = lower.concat(upper, nums, spec);

    for (var m = 0; m < passLength - 4; m++) {
      answer += possibilities.charAt(Math.floor(Math.random() * possibilities.length));
    }
    console.log(possibilities);
  } else if (lowCase && upCase && numChars) {
    possibilities = lower.concat(upper && nums);
  }
  return answer;
  //for (var i = 0; i < passLength - 5; i++) {
    //answer = answer +
  //}
}
//make window prompt appear after clicking generate password button.

//first prompt appears with a text field asking how many characters you want in the password

//then a series of yes no prompts asking will their be lowercase, uppercase, numeric and or special characters.

//make it so that characters will only be included if they chose the ok prompt

// concat variables into new variable called possibilities based on character selections

//randomly select character from new variable possibilities the amount of times specified in length selection.

//form new string with randomly selected characters and make it appear in text box

