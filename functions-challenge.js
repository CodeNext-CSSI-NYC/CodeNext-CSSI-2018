//Author: FirstName LastName

/******************************************************************************
1. Create a function called sumDouble
Given two number values, return their sum. Unless the two values are the same,
then return double their sum.

Examples:
sumDouble(1, 2) → 3
sumDouble(3, 2) → 5
sumDouble(2, 2) → 8
*******************************************************************************/

// Declare your function here

// Call it a few times and console.log the result, to make sure it is working

// Test out your function using our provided tests by uncommenting the line testSumDouble() at the very bottom of this file

/******************************************************************************
2. Create a function called makes10
Given 2 numbers, a and b, return true if one if them is 10 or if their sum is 10.

Examples:
makes10(9, 10) → true
makes10(9, 9) → false
makes10(1, 9) → true
*******************************************************************************/

// Declare your function here

// Call it a few times and console.log the result, to make sure it is working

// Test out your function using our provided tests by uncommenting the line testMakes10() at the very bottom of this file


/******************************************************************************
3. Create a function called parrotTrouble that has two parameters: talking and hour.
We have a loud talking parrot. The "talking" parameter is a boolean that
represents if the parrot is talking. The "hour" parameter is the current hour
time in the range 0..23. We are in trouble if the parrot is talking and the hour
is before 7 or after 20. Return true if we are in trouble.

Examples:
parrotTrouble(true, 6) → true
parrotTrouble(true, 7) → false
parrotTrouble(false, 6) → false
*******************************************************************************/

// Declare your function here

// Call it a few times and console.log the result, to make sure it is working

// Test out your function using our provided tests by uncommenting the line testParrotTrouble() at the very bottom of this file

/****************************************************************************
                                    Tests
*****************************************************************************/
function testSumDouble() {
  console.log();
  console.log("sumDouble(1, 2) → 3 ... your result: " + sumDouble(1, 2));
  console.log("sumDouble(3, 2) → 5 ... your result: " + sumDouble(3, 2));
  console.log("sumDouble(2, 2) → 8 ... your result: " + sumDouble(2, 2));
  console.log("sumDouble(-1, 0) → -1 ... your result: " + sumDouble(-1, 0));
  console.log("sumDouble(3, 3) → 12 ... your result: " + sumDouble(3, 3));
  console.log("sumDouble(0, 0) → 0 ... your result: " + sumDouble(0, 0));
  console.log("sumDouble(0, 1) → 1 ... your result: " + sumDouble(0, 1));
  console.log("sumDouble(3, 4) → 7 ... your result: " + sumDouble(3, 4));
}

function testMakes10() {
  console.log();
  console.log("makes10(9, 10) → true ... your result: " + makes10(9, 10));
  console.log("makes10(9, 9) → false ... your result: " + makes10(9, 9));
  console.log("makes10(1, 9) → true ... your result: " + makes10(1, 9));
  console.log("makes10(10, 1) → true ... your result: " + makes10(10, 1));
  console.log("makes10(10, 10) → true ... your result: " + makes10(10, 10));
  console.log("makes10(8, 2) → true ... your result: " +	makes10(8, 2));
  console.log("makes10(8, 3) → false ... your result: " + makes10(8, 3));
  console.log("makes10(10, 42) → true	... your result: " + makes10(10, 42));
  console.log("makes10(12, -2) → true	... your result: " + makes10(12, -2));
}

function testParrotTrouble() {
  console.log();
  console.log("parrotTrouble(true, 6) → true ... your result: " + parrotTrouble(true, 6));
  console.log("parrotTrouble(true, 7) → false ... your result: " + parrotTrouble(true, 7));
  console.log("parrotTrouble(false, 6) → false ... your result: " + parrotTrouble(false, 6));
  console.log("parrotTrouble(true, 21) → true ... your result: " + parrotTrouble(true, 21));
  console.log("parrotTrouble(false, 21) → false ... your result: " + parrotTrouble(false, 21));
  console.log("parrotTrouble(false, 20) → false ... your result: " + parrotTrouble(false, 20));
  console.log("parrotTrouble(true, 23) → true ... your result: " + parrotTrouble(true, 23));
  console.log("parrotTrouble(false, 23) → false ... your result: " + parrotTrouble(false, 23));
  console.log("parrotTrouble(true, 20) → false ... your result: " + parrotTrouble(true, 20));
  console.log("parrotTrouble(false, 12) → false ... your result: " + parrotTrouble(false, 12));
}


// testSumDouble();
// testMakes10();
// testParrotTrouble();
