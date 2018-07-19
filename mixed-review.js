let fs = require('fs');
const words = fs.readFileSync('words.txt').toString().split("\n");
let readline = require('readline-sync');
let randomInt = require('random-int');



// NOTE: In each exercise, I am asking you to write a function that RETURNS something.
// If you want to see the result, after you fill in the function, you will need
// to call the function and console log the result.
// For example, if you wanted to see what this first function is doing,
// you will need to type something like: console.log(evenOdd(9));



// 1. Write a function that takes in a number and then returns a string that
// looks like: "7 is odd" (or even if the number is even).
function evenOdd(num) {

}
// For example, if they type in 7 it would return: "7 is odd".
// If your function is correct, these should both print true.
// console.log(evenOdd(7) == "7 is odd");
// console.log(evenOdd(0) == "0 is even");



// 2. Write a function that takes in a number and returns the sum of all the numbers
// from 1 to num.
function sumUpTo(num) {

}
// If your function is correct, these should both print true.
// console.log(sumUpTo(10) == 55);
// console.log(sumUpTo(100) == 5050);



// 3. Write a function that takes in an array and returns the total number of letters
// in all the strings in that array
function totalLetters(arr) {

}
// If your function is correct, these should both print true.
// console.log(totalLetters(["a", "bc", "defg"]) == 7);
// console.log(totalLetters(["abcdefghij"]) == 10);



// 4a. Write a function that takes in an array and a number and returns the index
// at which that number FIRST appears in the array.
function firstTime(arr, num) {

}
// If your function is correct, these should both print true.
// console.log(firstTime([2, 3, 4, 2, 5, 3, 4], 4) == 2);
// console.log(firstTime([2, 3, 4, 2, 5, 3, 4], 3) == 1);



// 4b. Write a function that takes in an array and a number and returns the index
// at which that number LAST appears in the array.
function lastTime(arr, num) {

}
// If your function is correct, these should both print true.
// console.log(lastTime([2, 3, 4, 2, 5, 3, 4], 4) == 6);
// console.log(lastTime([2, 3, 4, 2, 5, 3, 4], 3) == 5);





// 5. Use a for loop and multiplication to create a function that calculates
// exponents for you (and returns the answer).
// Do NOT use the exponent operation **, that defeats the whole point of the exercise.
function powers(base, exponent) {
  let result = 1;
  // Hint: For loop goes here. Each time through the loop, you should do some
  // multiplication and store the answer back in result.
}
// If your function is correct, these should print true.
// console.log(powers(2, 5) == 32);
// console.log(powers(3, 4) == 81);
// console.log(powers(17, 1) == 17);


// 6. Write a function that takes in a string called word and returns true/false
// whether or not the word starts with L.
function startsWithL(word) {

}
// If your function is correct, these should print true.
// console.log(startsWithL("Liam") == true);
// console.log(startsWithL("orange") == false);
// console.log(startsWithL("lion") == true);



// Make sure you have coped all of the words from
// https://raw.githubusercontent.com/CodeNext-CSSI-NYC/CodeNext-CSSI-2018/master/words.txt
// into a file called words.txt in the same folder as all of your other files.
// The top of this file gives you an array called words which contains all the words
// from that file.



// 7. Write a function that takes in a word and returns true/false
// whether or not that word is in the array of words.
function inWords(word) {
  //
}
// These should all print true when you are done.
// console.log(inWords("star") == true);
// console.log(inWords("starrrrr") == false);



// 8. Write a function that takes in a letter and returns an array of
// all of the words that start and end with that letter.
function startAndEndWith(letter) {
  //
}
// These should all print true when you are done.
// console.log(startAndEndWith("y").length == 3);
// console.log(startAndEndWith("y").includes("yearly"));
// console.log(startAndEndWith("w").length == 7);
// console.log(startAndEndWith("w").includes("workflow"));



// 9. Write a function that takes in a number and returns the factorial of that number.
// More info: https://www.mathsisfun.com/numbers/factorial.html
// Use a for loop. Do not try to use the factorial symbol (!), it does not mean that in coding.
function factorial(num) {

}
// These should all print true when you are done.
// console.log(factorial(5) == 120);
// console.log(factorial(1) == 1);



// 10. Write a function that takes in a number and returns an array that adds that many
// Fibonacci numbers to the starting array of [0, 1].
// More info: https://www.mathsisfun.com/numbers/fibonacci-sequence.html
// Use a for loop.
// For example, if you call fibonacci(3), that means we want to add three numbers
// onto that array, so the return value should be the array [0, 1, 1, 2, 3]
function fibonacci(num) {
  let arr = [0, 1]; // This is the starter array that you will add numbers to
  // For loop here
  return arr;
}
// These tests should print true when you are done
// console.log(fibonacci(5).pop() == 8);
// console.log(fibonacci(8).pop() == 24);




// 11. Write a function that takes in an object called coins (see example below) and
// returns the amount of money those coins represent in dollars.
function countMoney(coins) {

}
// Below is a test that calls this function with an object that four properties,
// each representing how many coins I have.
let myCoins = {
  quarters: 2,
  dimes: 3,
  nickels: 4,
  pennies: 5
};
// If your function is correct, this should print true.
// console.log(countMoney(myCoins) == 1.05);



// 12. Write a function that keep asking the user to type in a number and stops
// as soon as they type in 24. Unlike the others, this function does not return anything.
function waitFor24() {

}
// Call it and make sure it works
waitFor24();
