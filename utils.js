// En funktion som kan 'split' en siffra till en array med olika positioner
// tex: 2320007700009 -> [2, 3, 2, 0, 0, 0, 7, 7, 0, 0, 0, 9]
function splitIntoArray(num) {
  return Array.from(String(num), Number);
}

// En funktion som kollar om längd på array är udda eller jämnt (12 siffron, 13 siffron)
function numberParity(arrayLength) {
  return arrayLength % 2 == 1 ? "odd" : "even";
}

// Matematiken är tvärtom för jämnt/udda siffor
function mathLogic(array, parity) {
  let tempArray = [];
  if (parity != "even") {
    for (let i = 0; i < array.length; i++) {
      i % 2 == 0 ? (tempArray[i] = array[i] * 3) : (tempArray[i] = array[i] * 1);
    }
  } else {
    for (let i = 0; i < array.length; i++) {
      i % 2 == 0 ? (tempArray[i] = array[i] * 1) : (tempArray[i] = array[i] * 3);
    }
  }
  return tempArray;
}

// Check digit är nearestRoundNumber - totalSum.
// Behöver använda /10 * 10 för att vi vill träffa närmaste 10.
function nearestRound(totalSum) {
  let nearestRoundNumber = Math.ceil(totalSum / 10) * 10;
  return String(nearestRoundNumber - totalSum);
}

function calculateGTIN(GTIN) {
  let totalSum = 0; //global variabel
  let array = splitIntoArray(GTIN);
  let parity = numberParity(array.length);
  let tempArray = mathLogic(array, parity);

  // Körs varje position på array som man tar med ifrån splitValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3]
  // Efteråt använda detta till räkna ut antalet
  tempArray.forEach((position) => {
    totalSum += position;
  });

  let checkDigit = nearestRound(totalSum);

  // Joina den original siffra med ny checkDigit som vi kalkulera ovanpå
  let numberWithCheckDigit = Number(array.join("") + checkDigit);
  return [Number(checkDigit), numberWithCheckDigit];
}

module.exports = { calculateGTIN };
