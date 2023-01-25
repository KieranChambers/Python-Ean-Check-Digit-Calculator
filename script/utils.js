// Checking if the input is valid format. I.e. 7 -> 17 numbers and not containing any non-numeric characters.
function isValidEan(input) {
  let isNum = /^\d+$/.test(input);
  let length = input.toString().length;
  let reason;

  let validLength =
    isNum != false
      ? length >= 7
        ? length <= 17
          ? true
          : [false, (reason = "Reason: too long")]
        : [false, (reason = "Reason: too Short")]
      : (reason = "Reason: not a number");
  return [isNum, validLength, reason];
}

// A function that converts a number to an array
// For example: 2320007711125 -> [2, 3, 2, 0, 0, 0, 7, 7, 1, 1, 1, 2, 5]
function convertToArray(num) {
  return Array.from(String(num), Number);
}

// A function that checks the length of an array and returns whether it's an
// even or odd amount of numbers. I.e. 12 or 13
function numberParity(arrayLength) {
  return arrayLength % 2 == 1 ? "odd" : "even";
}

// A functon for deciding what math we're using for odd/even length arrays
function oddEvenLogic(array, parity) {
  let tempArray = [];
  if (parity != "even") {
    for (let i = 0; i < array.length; i++) {
      i % 2 == 0 ? (tempArray[i] = array[i] * 3) : (tempArray[i] = array[i]);
    }
  } else {
    for (let i = 0; i < array.length; i++) {
      i % 2 == 0 ? (tempArray[i] = array[i]) : (tempArray[i] = array[i] * 3);
    }
  }
  return tempArray;
}

// The check digit is the nearest round number - totalSum
function calculateCheckDigit(totalSum) {
  let nearestRoundNumber = Math.ceil(totalSum / 10) * 10;
  return String(nearestRoundNumber - totalSum);
}

// Being called from index.js
function calculateEan(validEan) {
  let totalSum = 0;
  let arrayOfNumbers = convertToArray(validEan);
  let parity = numberParity(arrayOfNumbers.length);
  let tempArray = oddEvenLogic(arrayOfNumbers, parity);

  // Cycles through every position in the tempArray and adds those values to the totalSum
  tempArray.forEach((position) => {
    totalSum += position;
  });

  let checkDigit = calculateCheckDigit(totalSum);

  // Join the original input with the new check digit that we've calculated
  let numberWithCheckDigit = Number(arrayOfNumbers.join("") + checkDigit);
  return [Number(checkDigit), numberWithCheckDigit];
}

module.exports = { isValidEan, calculateEan };
