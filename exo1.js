var listOfNumbers = [1, 8, 11, 21, 44, 12]
const k = 56

var comparator = [];

const sumFinder = (listOfNumbers, k) => {
  comparator.push(listOfNumbers[0]);
  listOfNumbers.shift()
  while(listOfNumbers.length > 0) {
    if ( k - comparator[comparator.length - 1] === listOfNumbers[0]) {
      return true
    } else {
      comparator.push(listOfNumbers[0]);
      listOfNumbers.shift();
    }
  }
  return false
}

console.log(sumFinder(listOfNumbers, k))





//////////////////// AUTRE SOLUTION ///////////////////

// var listOfNumbers = [1, 9, 11, 21]
// const k = 19


// const compare = (listOfNumbers, k) => {
//   for (var i = 0; i < listOfNumbers.length; i++) {
//     for (let j = i + 1; j < listOfNumbers.length; j++) {
//       if (listOfNumbers[i] + listOfNumbers[j] === k) return true;
//     }
//   }
//   return false
// }


// console.log(compare(listOfNumbers, k))