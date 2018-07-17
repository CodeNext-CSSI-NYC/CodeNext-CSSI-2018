// Words are anagrams if they have the same number of each letter
// For example, creative and reactive are anagrams because they both have
// 2 e's, 1 c, etc.

// This code will load around 10k English words into an array called words.
// It will be useful to have this array for various challenges here.
// Note: this is not *every* English word so don't complain if your favorite is missing.
let fs = require('fs');
const words = fs.readFileSync('words.txt').toString().split("\n");



// 1. Find all words that are 12 letters long. Specifically, add them all to a new
// array and then print out that array at the end.



// 2. Find all words that contain both x and z (or whatever fun combos you like).
// Again, add them to a new array and print out that array at the end.
// Hint: Look up how to use str.includes(otherStr), a string method that checks if a string
// contains another string (which could be one or more letters).



// 3. Similar to what we did before, create a function that takes in a string
// and returns an object that contains the counts of the letters in the string.
// For example, for creative it would be {c: 1, r: 1, e: 2, a: 1, t: 1, i: 1, v: 1}



// 4a.
// We will cheat a bit here and use another package:
// npm install object-equal
// For more see www.npmjs.com/package/object-equal
// This will check for us if two objects have the same keys and values.
// Note that regular == does not work for objects or for arrays.
let objectEqual = require('object-equal');
// Now you can check if two objects are equal using: objectEqual(obj1, obj2);



// 4b. Write a function that takes in a word and checks the array of words at the
// top to see if any of the other words are anagrams. To do this:
// Use #3 above to create a counter object for the past in word.
// Use a for loop to go through the words array. For each word ...
//      use #3 to make a counter object, and check if this counter object is
//      equal to the one we made from the original word using the tools in 4a.
//      If the counter objects are equal, that means the words are anagrams.
// Track all of the anagrams in a new array and print it out at the end.
// Make sure you test this out. One pair of anagrams that are both in the list are:
// scared and sacred. I'm sure there are many more.
