const sumAll = function(num1, num2) {
  if(num1 < 0 || !Number.isInteger(num1) || 
      num2 < 0 || !Number.isInteger(num2)) {
        return "ERROR";
      }

  finalSum = 0;
  firstNum = num1;
  secondNum = num2;

  if (num1 > num2) {
    firstNum = num2;
    secondNum = num1;
  }

  for (i = firstNum; i < secondNum + 1; i++){

    finalSum += i
  }
  return finalSum
};

// Do not edit below this line
module.exports = sumAll;
