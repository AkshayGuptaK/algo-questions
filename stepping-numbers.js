// A number is called stepping number if all adjacent digits have an absolute difference of 1,
// e.g. '321' is a Stepping Number while 421 is not.
// Given two integers n and m, find the count of all the stepping numbers in range [n, m].

// Examples: 
// Input : n = 0, m = 21
// Output : 13
// Stepping no's are 0 1 2 3 4 5 6 7 8 9 10 12 21

// Input : n = 10, m = 15
// Output : 2
// Stepping no's are 10, 12

function isSteppingNumber (number) {
  const digitArray = number.toString().split('').map(value => parseInt(value))
  let previousDigit = null
  let i = 0
  while (i<digitArray.length) {
    if (previousDigit && Math.abs(digitArray[i] - previousDigit) !== 1) return false
    previousDigit = digitArray[i]
    i++
  }
  return true
}

function steppingNumbers (start, end) 
{
  let count = 0
  for (let i=start; i<=end; i++) {
    isSteppingNumber(i) && count++
  }
  return count
}

console.log(steppingNumbers(0, 21))