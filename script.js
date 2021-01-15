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
  //if all are checked
  if (lowCase && upCase && numChars && specChars) {
    answer += lower.charAt(Math.floor(Math.random() * lower.length));
    answer += spec.charAt(Math.floor(Math.random() * spec.length));
    answer += upper.charAt(Math.floor(Math.random() * upper.length));
    answer += nums.charAt(Math.floor(Math.random() * nums.length));

    possibilities = lower.concat(upper, nums, spec);

    for (var j = 0; j < passLength - 4; j++) {
      answer += possibilities.charAt(Math.floor(Math.random() * possibilities.length));
    }
  //if 3 are checked
  } else if (lowCase && upCase && numChars) {
    answer += lower.charAt(Math.floor(Math.random() * lower.length));
    answer += upper.charAt(Math.floor(Math.random() * upper.length));
    answer += nums.charAt(Math.floor(Math.random() * nums.length));

    possibilities = lower.concat(upper && nums);

    for (var j = 0; j < passLength - 3; j++) {
      answer += possibilities.charAt(Math.floor(Math.random() * possibilities.length));
    }
  } else if (lowCase && upCase && specChars) {
    answer += lower.charAt(Math.floor(Math.random() * lower.length));
    answer += upper.charAt(Math.floor(Math.random() * upper.length));
    answer += spec.charAt(Math.floor(Math.random() * spec.length));

    possibilities = lower.concat(upper && spec);

    for (var j = 0; j < passLength - 3; j++) {
      answer += possibilities.charAt(Math.floor(Math.random() * possibilities.length));
    }
  } else if (lowCase && numChars && specChars) {
    answer += lower.charAt(Math.floor(Math.random() * lower.length));
    answer += nums.charAt(Math.floor(Math.random() * nums.length));
    answer += spec.charAt(Math.floor(Math.random() * spec.length));

    possibilities = lower.concat(nums && spec);

    for (var j = 0; j < passLength - 3; j++) {
      answer += possibilities.charAt(Math.floor(Math.random() * possibilities.length));
    }
  } else if (upCase && numChars && specChars) {
    answer += upper.charAt(Math.floor(Math.random() * upper.length));
    answer += nums.charAt(Math.floor(Math.random() * nums.length));
    answer += spec.charAt(Math.floor(Math.random() * spec.length));

    possibilities = upper.concat(nums && spec);

    for (var j = 0; j < passLength - 3; j++) {
      answer += possibilities.charAt(Math.floor(Math.random() * possibilities.length));
    }
    //if 2 are checked
  } else if (lowCase && upCase) {
    answer += lower.charAt(Math.floor(Math.random() * lower.length));
    answer += upper.charAt(Math.floor(Math.random() * upper.length));

    possibilities = lower.concat(upper)

    for (var j = 0; j < passLength - 2; j++) {
      answer += possibilities.charAt(Math.floor(Math.random() * possibilities.length));
    }
  } else if (lowCase && numChars) {
    answer += lower.charAt(Math.floor(Math.random() * lower.length));
    answer += nums.charAt(Math.floor(Math.random() * nums.length));

    possibilities = lower.concat(nums)

    for (var j = 0; j < passLength - 2; j++) {
      answer += possibilities.charAt(Math.floor(Math.random() * possibilities.length));
    }
  } else if (lowCase && specChars) {
    answer += lower.charAt(Math.floor(Math.random() * lower.length));
    answer += spec.charAt(Math.floor(Math.random() * spec.length));

    possibilities = lower.concat(spec)

    for (var j = 0; j < passLength - 2; j++) {
      answer += possibilities.charAt(Math.floor(Math.random() * possibilities.length));
    }
  } else if (upCase && numChars) {
    answer += upper.charAt(Math.floor(Math.random() * upper.length));
    answer += nums.charAt(Math.floor(Math.random() * nums.length));

    possibilities = upper.concat(nums)

    for (var j = 0; j < passLength - 2; j++) {
      answer += possibilities.charAt(Math.floor(Math.random() * possibilities.length));
    }
  } else if (upCase && specChars) {
    answer += upper.charAt(Math.floor(Math.random() * upper.length));
    answer += spec.charAt(Math.floor(Math.random() * spec.length));

    possibilities = upper.concat(spec)

    for (var j = 0; j < passLength - 2; j++) {
      answer += possibilities.charAt(Math.floor(Math.random() * possibilities.length));
    }
  } else if (numChars && specChars) {
    answer += nums.charAt(Math.floor(Math.random() * nums.length));
    answer += spec.charAt(Math.floor(Math.random() * spec.length));

    possibilities = nums.concat(spec)

    for (var j = 0; j < passLength - 2; j++) {
      answer += possibilities.charAt(Math.floor(Math.random() * possibilities.length));
    }
    //if only 1 box is checked
  } else if (upCase) {
    possibilities = upper;

    for (var j = 0; j < passLength; j++) {
      answer += possibilities.charAt(Math.floor(Math.random() * possibilities.length));
    }
  } else if (lowCase) {
    possibilities = lower;

    for (var j = 0; j < passLength; j++) {
      answer += possibilities.charAt(Math.floor(Math.random() * possibilities.length));
    }
  } else if (numChars) {
    possibilities = nums;

    for (var j = 0; j < passLength; j++) {
      answer += possibilities.charAt(Math.floor(Math.random() * possibilities.length));
    }
  } else if (specChars) {
    possibilities = spec;

    for (var j = 0; j < passLength; j++) {
      answer += possibilities.charAt(Math.floor(Math.random() * possibilities.length));
    }
  } else {
    alert("You must choose one of the options.")
  }


  return answer;

}
//make window prompt appear after clicking generate password button.

//first prompt appears with a text field asking how many characters you want in the password

//then a series of yes no prompts asking will their be lowercase, uppercase, numeric and or special characters.

//make it so that characters will only be included if they chose the ok prompt

// concat variables into new variable called possibilities based on character selections

//randomly select character from new variable possibilities the amount of times specified in length selection.

//form new string with randomly selected characters and make it appear in text box

