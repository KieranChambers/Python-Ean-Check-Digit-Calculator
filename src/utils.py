import re

# Checking if the input is valid format. I.e. 7 -> 17 numbers and not containing any non-numeric characters.


def isValidEan(input):
    isNum = bool(re.match(r"^\d+$", str(input)))
    length = len(str(input))
    reason = ""

    validLength = length >= 7 and length <= 17 and isNum
    if not isNum:
        reason = "Not a number"
    elif length < 7:
        reason = "Too short"
    elif length > 17:
        reason = "Too long"

    return [isNum, validLength, reason]


# A function that converts a number to an array
# For example: 2320007711125 -> [2, 3, 2, 0, 0, 0, 7, 7, 1, 1, 1, 2, 5]


def convertToArray(num):
    return [int(digit) for digit in str(num)]


# A function that checks the length of an array and returns whether it's an
# even or odd amount of numbers. I.e. 12 or 13


def numberParity(arrayLength):
    return "odd" if arrayLength % 2 == 1 else "even"


# A function that checks the length of an array and returns whether it's an
# even or odd amount of numbers. I.e. 12 or 13


def oddEvenLogic(array, parity):
    tempArray = []

    if parity != "even":
        for i, value in enumerate(array):
            tempArray.append(value * 3 if i % 2 != 1 else value)
    else:
        for i, value in enumerate(array):
            tempArray.append(value if i % 2 == 0 else value * 3)
    return tempArray


# A functon for deciding what math we're using for odd/even length arrays
def calculateCheckDigit(totalSum):
    nearestRoundNumber = (totalSum // 10 + 1) * 10
    return str(nearestRoundNumber - totalSum)


# Being called from index. Main Function.


def calculateEan(validEan):
    totalSum = 0
    arrayOfNumbers = convertToArray(validEan)
    parity = numberParity(len(arrayOfNumbers))
    tempArray = oddEvenLogic(arrayOfNumbers, parity)

    # Cycles through every position in the tempArray and adds those values to the totalSum
    for position in tempArray:
        totalSum += position

    checkDigit = calculateCheckDigit(totalSum)

    # Join the original input with the new check digit that we've calculated
    numberWithCheckDigit = int(str(validEan) + checkDigit)
    return [int(checkDigit), numberWithCheckDigit]
