var listOfNumbers = [1, 8, 11, 21, 44, 12]
const k = 19

var valuesToCompare = [];

const sumFinder = (listOfNumbers, k) => {
  valuesToCompare.push(listOfNumbers[0])
  listOfNumbers.shift()
  var i = 0
  while (listOfNumbers.length > 0) {
    if (k - valuesToCompare[valuesToCompare.length - 1] === listOfNumbers[i]) {
      return true;
    } else if (i = listOfNumbers.length) {
      i = 0;
      valuesToCompare.push(listOfNumbers[0])
      listOfNumbers.shift();
    } else {
      i ++;
    }
  }
  return false
}

console.log(sumFinder(listOfNumbers, k))











// var listOfNumbers = [1, 8, 11, 21, 44, 12]
// const k = 19

// var valuesToCompare = [];

// const sumFinder = (listOfNumbers, k) => {
//   valuesToCompare.push(listOfNumbers[0])
//   listOfNumbers.shift()
//   var i = 0
//   while (listOfNumbers.length > 0) {
//     if (k - valuesToCompare[valuesToCompare.length - 1] === listOfNumbers[i]) {
//       return true;
//     } else if (i = listOfNumbers.length) {
//       i = 0;
//       valuesToCompare.push(listOfNumbers[0])
//       listOfNumbers.shift();
//     } else {
//       i ++;
//     }
//   }
//   return false
// }

// console.log(sumFinder(listOfNumbers, k))