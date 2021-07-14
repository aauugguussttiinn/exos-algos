var listOfNumbers = [15, 444, 13, 5, 18, 9, 11, 10, 6, 9, 8, 7, 3, 5];

var buildingsWithAView = [];
var reversedArray = listOfNumbers.reverse();

const viewFinder = (listOfNumbers) => {
  buildingsWithAView.push(reversedArray[0]);
  var maxValueinBuildingsWithAView = buildingsWithAView[0]
  reversedArray.shift()
  while (reversedArray.length > 0) {
    var buildingToCOmpare = reversedArray[0]
    if (maxValueinBuildingsWithAView > buildingToCOmpare) {
      reversedArray.shift()
    } else {
      buildingsWithAView.push(buildingToCOmpare);
      maxValueinBuildingsWithAView = buildingToCOmpare
      reversedArray.shift();
    }
  }
  console.log(buildingsWithAView.reverse());
}

viewFinder(listOfNumbers);







// var listOfNumbers = [15, 444, 13, 5, 18, 9, 11, 10, 6, 9, 8, 7, 3, 5];

// var buildingsWithAView = [];
// var reversedArray = listOfNumbers.reverse();

// const viewFinder = (listOfNumbers) => {
//   buildingsWithAView.push(reversedArray[0]);
//   var maxValueinBuildingsWithAView = buildingsWithAView[0]
//   reversedArray.shift()
//   while (reversedArray.length > 0) {
//     var buildingToCOmpare = reversedArray[0]
//     if (maxValueinBuildingsWithAView > buildingToCOmpare) {
//       reversedArray.shift()
//     } else {
//       buildingsWithAView.push(buildingToCOmpare);
//       maxValueinBuildingsWithAView = buildingToCOmpare
//       reversedArray.shift();
//     }
//   }
//   console.log(buildingsWithAView.reverse());
// }

// viewFinder(listOfNumbers);