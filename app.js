// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.

const testStr = "DonT TaKe MuH GeHrNz"

function getCount(str) {
  var vowelsCount = 0;
  str.toLowerCase();
  for(i=0; i<str.length; i++){
    if(
    str[i] === "a" ||
    str[i] === "e" ||
    str[i] === "i" ||
    str[i] === "o" ||
    str[i] === "u"){
      vowelsCount++;
    }
  }  
  return vowelsCount;
}

// test toLowerCase method
console.log(testStr.toLowerCase())

// test function
console.log(getCount(testStr))

// refactor with match() or replace and regEx
