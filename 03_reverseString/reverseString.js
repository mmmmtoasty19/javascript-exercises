const reverseString = function(text) {
  length = text.length;

  reversedString = "";

  for (let i = 0; i < length; i++ ){
    char = text[i]

    reversedString = char + reversedString
  }

  return reversedString
};

// Do not edit below this line
module.exports = reverseString;
