from utils import isValidEan, calculateEan

testEanArray = [
    1730020496575,
    "123123asdwadea212e",
    1730020496575,
    "false",
    9730020371731,
    "ImAStringAndImTooLong",
    1234567,
    123456789123456789,
    True,
]


def calculator(input):
    for position in input:
        isNum, isCorrectLength, reason = isValidEan(position)

        # Check if the input has a valid EAN format
        if isNum != True or isCorrectLength != True:
            print(f'{position} is not a valid input. {reason}.')
        else:
            checkDigit, numberWithCheckDigit = calculateEan(position)

            # Output to console
            output = f'Original Value: {position}. Check Digit: {checkDigit}. New value: {numberWithCheckDigit}'
            print(output)


calculator(testEanArray)
