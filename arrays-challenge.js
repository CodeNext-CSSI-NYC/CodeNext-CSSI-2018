//Author: FirstName LastName

/******************************************************************************
                                   firstLast6()
Instructions:
Given an array of numbers, return true if 6 appears as either the first or last
element in the array. The array will be length 1 or more.

Examples:
firstLast6([1, 2, 6]) → true
firstLast6([6, 1, 2, 3]) → true
firstLast6([13, 6, 1, 2, 3]) → false
*******************************************************************************/
function firstLast6(nums) {

}

// Uncomment the next line to test the function.
// testFirstLast6();
function testFirstLast6() {
  console.log();
  console.log("firstLast6([1, 2, 6]) → true " + firstLast6([1, 2, 6]));
  console.log("firstLast6([6, 1, 2, 3]) → true " + firstLast6([6, 1, 2, 3]));
  console.log("firstLast6([13, 6, 1, 2, 3]) → false " + firstLast6([13, 6, 1, 2, 3]));
  console.log("firstLast6([13, 6, 1, 2, 6]) → true " + firstLast6([13, 6, 1, 2, 6]));
  console.log("firstLast6([3, 2, 1]) → false " + firstLast6([3, 2, 1]));
  console.log("firstLast6([3, 6, 1]) → false " + firstLast6([3, 6, 1]));
  console.log("firstLast6([3, 6]) → true " + firstLast6([3, 6]));
  console.log("firstLast6([6]) → true " + firstLast6([6]));
  console.log("firstLast6([3]) → false " + firstLast6([3]));
  console.log("firstLast6([5, 6]) → true " + firstLast6([5, 6]));
  console.log("firstLast6([5, 5]) → false " + firstLast6([5, 5]));
  console.log("firstLast6([1, 2, 3, 4, 6]) → true " + firstLast6([1, 2, 3, 4, 6]));
  console.log("firstLast6([1, 2, 3, 4]) → false " + firstLast6([1, 2, 3, 4]));
}




/******************************************************************************
                                   midThree()
Instructions:
Given an array of numbers of odd length, return a new array length 3 containing
the elements from the middle of the array. The array length will be at least 3.

Examples:
midThree([1, 2, 3, 4, 5]) → [2, 3, 4]
midThree([8, 6, 7, 5, 3, 0, 9]) → [7, 5, 3]
midThree([1, 2, 3]) → [1, 2, 3]
*******************************************************************************/
function midThree(nums) {

}

// Uncomment the next line to test the function.
// testMidThree();
function testMidThree() {
  console.log();
  console.log("midThree([1, 2, 3, 4, 5]) → [2, 3, 4] " + "[" + midThree([1, 2, 3, 4, 5]) + "]");
  console.log("midThree([8, 6, 7, 5, 3, 0, 9]) → [7, 5, 3] " + "[" + midThree([8, 6, 7, 5, 3, 0, 9]) + "]");
  console.log("midThree([1, 2, 3]) → [1, 2, 3] " + "[" + midThree([1, 2, 3]) + "]");
}




/******************************************************************************
                                   copyEvens()
Instructions:
Given an array of positive numbers and a number count, return a new array of length "count"
containing the first "count" even numbers from the original array.
The original array will contain at least "count" even numbers.

Examples:
copyEvens([3, 2, 4, 5, 8], 2) → [2, 4]
copyEvens([3, 2, 4, 5, 8], 3) → [2, 4, 8]
copyEvens([6, 1, 2, 4, 5, 8], 3) → [6, 2, 4]
*******************************************************************************/
function copyEvens(nums, count) {

}

// Uncomment the next line to test the function.
// testCopyEvens();
function testCopyEvens() {
  console.log();
  console.log("copyEvens([3, 2, 4, 5, 8], 2) → [2, 4] " + "[" + copyEvens([3, 2, 4, 5, 8], 2) + "]");
  console.log("copyEvens([3, 2, 4, 5, 8], 3) → [2, 4, 8] " + "[" + copyEvens([3, 2, 4, 5, 8], 3) + "]");
  console.log("copyEvens([6, 1, 2, 4, 5, 8], 3) → [6, 2, 4] " + "[" + copyEvens([6, 1, 2, 4, 5, 8], 3) + "]");
  console.log("copyEvens([6, 1, 2, 4, 5, 8], 4) → [6, 2, 4, 8] " + "[" + copyEvens([6, 1, 2, 4, 5, 8], 4) + "]");
  console.log("copyEvens([3, 1, 4, 1, 5], 1) → [4] " + "[" + copyEvens([3, 1, 4, 1, 5], 1) + "]");
  console.log("copyEvens([2], 1) → [2] " + "[" + copyEvens([2], 1) + "]");
  console.log("copyEvens([6, 2, 4, 8], 2) → [6, 2] " + "[" + copyEvens([6, 2, 4, 8], 2) + "]");
  console.log("copyEvens([6, 2, 4, 8], 3) → [6, 2, 4] " + "[" + copyEvens([6, 2, 4, 8], 3) + "]");
  console.log("copyEvens([6, 2, 4, 8], 4) → [6, 2, 4, 8] " + "[" + copyEvens([6, 2, 4, 8], 4) + "]");
  console.log("copyEvens([1, 8, 4], 1) → [8] " + "[" + copyEvens([1, 8, 4], 1) + "]");
  console.log("copyEvens([1, 8, 4], 2) → [8, 4] " + "[" + copyEvens([1, 8, 4], 2) + "]");
  console.log("copyEvens([2, 8, 4], 2) → [2, 8] " + "[" + copyEvens([2, 8, 4], 2) + "]");
}
