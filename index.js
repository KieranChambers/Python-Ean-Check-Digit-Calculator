//TODO: bygga en websida man så kan man använda denna istället för 'inputs'
//TODO: Write comments in English

const { calculateGTIN } = require("./utils.js");

const originalValuesArray = [1730020700078, 1730020496575, 9730020371731];

// Main funktion
function GTINkalk(originalValues) {
  // Använd forEach här så kan vi ta varje position i originalValuesArray

  originalValues.forEach((value) => {
    let [checkDigit, numberWithCheckDigit] = calculateGTIN(value);

    // Logg till konsolen med results
    let results = `Original Värde: ${value} Check Digit: ${checkDigit} Nyvärde: ${numberWithCheckDigit}`;
    console.log(results);
  });
}

GTINkalk(originalValuesArray);
