// Given an array of integers containing duplicates, return the majority element in an array
// if present. A majority element appears more than n/2 times where n is the size of the array.

// For example, the majority element is 2 in the array 
// [2, 8, 7, 2, 2, 5, 2, 3, 1, 2, 2]

function findMajorityElement (numberArray) {
  let counts = {}
  for (let i=0; i<numberArray.length; i++) {
    if (counts[[numberArray[i]]] === undefined) {
        counts[[numberArray[i]]] = 1
    } else {
      counts[[numberArray[i]]]++
      if (counts[[numberArray[i]]] > numberArray.length/2) {
        return numberArray[i]
      }
    }
  }
  return null
}

console.log(findMajorityElement([2, 8, 7, 2, 2, 5, 2, 3, 1, 2, 2]))