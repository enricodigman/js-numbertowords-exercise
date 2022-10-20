const ones = [['0', ''], ['1', 'one '], ['2', 'two '], ['3', 'three '], ['4', 'four '],
  ['5', 'five '], ['6', 'six '], ['7', 'seven '], ['8', 'eight '], ['9', 'nine ']]
const twoDigits = [['0', 'ten '], ['1', 'eleven '], ['2', 'twelve '], ['3', 'thirteen '],
  ['4', 'fourteen '], ['5', 'fifteen '], ['6', 'sixteen '], ['7', 'seventeen '],
  ['8', 'eighteen '], ['9', 'nineteen ']]
const tens = [['2', 'twenty '], ['3', 'thirty '], ['4', 'forty '], ['5', 'fifty '],
  ['6', 'sixty '], ['7', 'seventy '], ['8', 'eighty '], ['9', 'ninety ']]
const bigNumbers = ['hundred ', 'thousand ']
let result = ''

function twoDigitFunc(twoDigitNo) {
  const digits2 = twoDigitNo.toString()
  if (digits2.length === 2) {
    if (digits2[0] !== '1') {
      for (let i = 0; i < tens.length; i += 1) {
        if ((digits2[0] === tens[i][0])) {
          result += `${tens[i][1]}`
        }
      }
      for (let i = 0; i < ones.length; i += 1) {
        if ((digits2[1] === ones[i][0])) {
          result += `${ones[i][1]}`
        }
      }
    } else {
      for (let i = 0; i < twoDigits.length; i += 1) {
        if (digits2[1] === twoDigits[i][0]) {
          result += `${twoDigits[i][1]}`
        }
      }
    }
  }
  return result
}

function threeDigitFunc(threeDigitNo) {
  const digits3 = threeDigitNo.toString()
  if (digits3.length === 3 && digits3[0] !== '0') {
    result += ones[digits3[0]][1] + bigNumbers[0]
    twoDigitFunc(digits3.slice(1))
  }
  return result
}

function fourDigitFunc(fourDigitNo) {
  const digits4 = fourDigitNo.toString()
  result += ones[digits4[0]][1] + bigNumbers[1]
  threeDigitFunc(digits4.slice(1))
  return result
}

function fiveDigitFunc(fiveDigitNo) {
  const digits5 = fiveDigitNo.toString()
  console.log(digits5)
  if (digits5[0] !== '0') {
    twoDigitFunc(digits5.slice(0, 2))
    result += bigNumbers[1]
    threeDigitFunc(digits5.slice(2))
  }
  return result
}

function sixDigitFunc(sixDigitNo) {
  const digits6 = sixDigitNo.toString()
  result += ones[digits6[0]][1] + bigNumbers[0]
  fiveDigitFunc(digits6.slice(1))
  return result
}

function numToString(number) {
  result = ''
  if (number > 999999) { throw new Error('Number is beyond 999,999.') }
  if (number < 0) { throw new Error('Number is less than 0') }
  if (number === 0) { result += 'zero' }
  const digits = number.toString()
  switch (digits.length) {
    case 1:
      result += ones[digits[0]][1]
      break
    case 2:
      result += twoDigitFunc(number)
      break
    case 3:
      result += threeDigitFunc(number)
      break
    case 4:
      result += fourDigitFunc(number)
      break
    case 5:
      result += fiveDigitFunc(number)
      break
    case 6:
      result += sixDigitFunc(number)
      break
    default:
      throw new Error('Invalid Number')
  }
  return result
}

console.log(numToString(0))
console.log(numToString(456))
