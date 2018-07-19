// When you roll two dice, the possible sums are 2-12.

// One way to keep track of how many times we have seen each sum is to use an array
// whose indexes go up to 12, and then to just ignore and never use the 0 and 1 spots.
let results = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let randomInt = require("random-int");

for (let i = 0; i < 1000; i++) {
  // All you need to do is fill in this for loop. Our goal is to roll
  // two separate dice each time, figure out what they add up to,
  // and increment the corresponding spot in the array by 1.
  // So if the rolls are 3 and 6, we would increment results[9] since 3 + 6 = 9.
}



// This draws a nice chart of the data we collected in the results array,
// using the functions I have provided below.
// Which number do you think will be the sum most often? Does that match the chart?
console.clear();
printChart();

// You don't need to edit this.
function printChart(arr) {
  for (let sum = 2; sum <= 12; sum++) {
    printRow(results, sum);
  }
  // console.log(results);
}

// You don't need to edit this.
// Feel free to change the "X" used to draw the charts to another symbol if you want.
// You should try to understand what is happening here and ask for help if you don't.
function printRow(arr, num) {
  let numX = Math.round(arr[num] / 10);
  strX = "";
  if (num < 10) {
    strX += " ";
  }
  for (let i = 0; i < numX; i++) {
    strX += "X";
  }
  console.log(num + ": " + strX);
}
