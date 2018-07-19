let fruits = [
  ["apple", "banana", "grape"],
  ["peach", "raspberry", "papaya"],
  ["apricot", "cherry", "pineapple"],
  ["watermelon", "nectarine", "tangerine"],
  ["mango", "strawberry", "blueberry"]
];

function findItem(arr, str) {
  for (let row = 0; row < arr.length; row++) {
    if (arr[row].includes(str)) {
      return true;
    }
  }
  return false;
}

// console.log(findItem(fruits, "cherry"));
// console.log(findItem(fruits, "durian"));




// 5. Write a function that takes in a 2D-array and a string as input.
// The function should return true if the string is found somewhere in the array, and false otherwise.
// Test it using the fruits array, including cases with fruits that are there
// and other cases with fruits that are not.



// Get a basic version of this working. You should return true if there is at least one duplicated value.
function hasDuplicate(arr) {

}
// Here are some examples you can use to test
// let arr1 = [3,4,5,6,7,1,2,5,9];
// let arr2 = ["apple", "banana", "pear", "banana"];
// Also make some examples where the answer is false



// 2. Try to figure out how to draw a "border" pattern:

// XXXXXXXX  (0,0) (0, 1) (0, 2) ... (0, 7)
// X------X  (1, 0)                  (1, 7)
// X------X  (2, 0)                  (2, 7)
// X------X  (3, 0)                  (3, 7)
// X------X   (4, 0)                  (4, 7)
// X------X  (5, 0)                  (5, 7)
// X------X  (6, 0)                  (6, 7)
// XXXXXXXX   (7, 0) (7, 1) (7, 2) (7, 3) ... (7, 7)

// let num = 30;
// for (let row = 0; row < num; row++) {
//   str = "";
//   for (let col = 0; col < num; col++) {
//     if (row == 0 || col == 0 || row == num - 1 || col == num - 1) {
//       str += "X";
//     } else {
//       str += "-";
//     }
//   }
//   console.log(str);
// }


// 5. Try to figure out how to draw a "chessboard" pattern:

// X-X-X-X-  (0, 0) (0, 2) (0, 4) (0, 6)
// -X-X-X-X  (1, 1) (1, 3) (1, 5) (1, 7)
// X-X-X-X-  (2, 0) (2, 2) (2, 4) (2, 6)
// -X-X-X-X
// X-X-X-X-
// -X-X-X-X
// X-X-X-X-
// -X-X-X-X


let num = 30;
for (let row = 0; row < num; row++) {
  str = "";
  for (let col = 0; col < num; col++) {
    if ((row + col) % 2 == 0) {
      str += "X";
    } else {
      str += "-";
    }
  }
  console.log(str);
}
