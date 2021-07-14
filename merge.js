const fs = require('fs');

const fileName = process.argv[2];


const recursiveSort = (listOfNumbers) => {
  if (listOfNumbers.length < 2 ) {
    return listOfNumbers;
  } else {
    const arrayOfNumbers = [...listOfNumbers];
    var half = findHalf(arrayOfNumbers);
    var left = firstHalf(arrayOfNumbers, half);
    var right = secondHalf(arrayOfNumbers);
    var halfMerging = merge(recursiveSort(left), recursiveSort(right));
    // console.log(`The middle value is ${half}`);
    // console.log(`Here is the first half of the array : ${firstHalf(arrayOfNumbers, half)}`);
    // console.log(`Here is the first half of the array : ${secondHalf(arrayOfNumbers)}`);
    halfMerging.unshift(0, listOfNumbers.length);
    listOfNumbers.splice.apply(listOfNumbers, halfMerging);
    return listOfNumbers;

  }
}

const merge = (leftPart, rightPart) => {
  var arrayToFill = [];
  var leftCount = 0;
  var rightCount = 0;

  while (leftCount < leftPart.length && rightCount < rightPart.length){
    if (leftPart[leftCount] < rightPart[rightCount]){
        arrayToFill.push(leftPart[leftCount++]);
    } else {
        arrayToFill.push(rightPart[rightCount++]);
    }
}
return arrayToFill.concat(leftPart.slice(leftCount)).concat(rightPart.slice(rightCount));

}






const findHalf = (arrayOfNumbers) => {
  return Math.round((arrayOfNumbers.length)/2);
}

const firstHalf = (arrayOfNumbers, half) => {
  const firstArray = arrayOfNumbers.splice(0, half);
  return firstArray;
}

const secondHalf = (arrayOfNumbers) => {
  const secondArray = arrayOfNumbers
  return secondArray;
}







try {
  const data = fs.readFileSync(fileName, 'utf8');
  console.log(data);
  const listOfNumbers = data.split(" ").map(num => parseInt(num, 10))
  console.log(recursiveSort(listOfNumbers));
} catch (error) {
  console.error(error.message);
}