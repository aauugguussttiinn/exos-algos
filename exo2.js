var listOfNumbers = [15, 9, 11, 10, 6, 9, 8, 444, 13, 18, 5, 7, 3, 5];

var buildingsWithAView = [];


const viewFinder = (listOfNumbers) => {
  while (listOfNumbers.length > 0) {
    var currentMaxValue = listOfNumbers[0];
    for (var j = 1 ; j < listOfNumbers.length ; j++) {
      if (currentMaxValue < listOfNumbers[j]) {
        currentMaxValue = listOfNumbers[j];
      }
    }
    const index = listOfNumbers.indexOf(currentMaxValue);
    buildingsWithAView.push(currentMaxValue);
    listOfNumbers.splice(0, (index + 1));
  }
  console.log(buildingsWithAView)
}

viewFinder(listOfNumbers);