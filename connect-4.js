// Read about how to play the game: https://en.wikipedia.org/wiki/Connect_Four#Gameplay
// Try playing the game: https://www.mathsisfun.com/games/connect4.html

// As you should see in those examples, connect 4 takes place in a 2D Array that
// has 6 rows and 7 columns. A player chooses a column with at least one open spot,
// and that player's piece goes to the lowest open spot in the column.

// We will represent empty spots with underscores _
// The two players will be X and O

// 1. Step 1 is to create the 2D array and fill it up with _.
// Do this using 2 nested for loops that run 6 and 7 times.
// Created a render function that takes this array and prints it out nicely.



// 2. The next step is to allow a player to make a play. For now, let's just assume
// there is only one player, so every move is an X. Write a function that takes in
// the 2D array and asks the player for a column in which to move (0-6).
// This function should update the array as long as the column is valid. There are
// two things that could make a column invalid: the number is not 0-6, or
// the column is 0-6 but it is already full of X's.
// It will probably help to make a isColumnFull(arr, colNumber) function whose
// job is to tell you if a column is full. It may also help to make a separate
// validColumnNumber(num) function that tells you whether or not the passed in
// number is between 0-6.

// Here is an array that is almost full, which will be useful when you are testing
// this and other functions.
let almostFullArray = [
  ["_", "_", "X", "X", "X", "X", "_"],
  ["_", "_", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X"],
  ["X", "X", "X", "X", "X", "X", "X"]
];


// 3. At this point, if everything in #2 works, you should (as the player) be able
// to keep typing in column numbers and see the connect 4 grid slowly fill up with
// X's. But when it does get filled up, we should stop the game. Make a isFull(arr)
// function that returns true if there are no more _ anywhere in the array. If there
// is even a single _, then it should return false. Now, use this function to stop
// asking the user which column they want to play in when the grid is full.



// 4. The next step is to alternate which player's turn it is. It might be easier
// to call the players "X" and "O", so that their names match what they are
// putting into the grid. Or you can call them 1 and 2. It's up to you.
// Either way, your goal now is to alternate between X and O when filling in the grid,
// so that it looks like an actual game of Connect 4. The only thing that won't
// be working when you are done with this step is detecting whether anyone has won.
// But players should be able to fill in X and O in the grid, and they should not
// be able to overfill columns or use columns outside of 0-6.



// 5a. The last step is to figure out if someone has won on any given board.
// This is extemely hard. I would start by just trying to figure out if there
// are any vertical connect 4's in a board. For example, this valid grid has a
// vertical connect 4 in column 2

let withVerticalWinner = [
  ["_", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "X", "_", "_", "_", "_"],
  ["_", "_", "X", "_", "O", "_", "_"],
  ["_", "_", "X", "_", "O", "_", "_"],
  ["_", "_", "X", "_", "O", "_", "_"]
];

// Make sure you test out your code with vertical winners that are in other
// places besides the very bottom of a column like this one. This can be done with
// nested for loops and some other things, but as I said, it is hard.



// 5b. If you can get 5a, you should also be able to check for horizontal winners.
let withHorizontalWinner = [
  ["_", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "O", "O", "O", "_", "_"],
  ["_", "_", "X", "X", "X", "X", "_"]
];




// 5c. Testing for diagonal winners is much harder still. If you get here
// (meaning you have 5a and 5b working and tested on a variety of boards),
// we can talk about how you might test for diagonal winners.
let withDiagonalWinner = [
  ["_", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "_", "_", "_"],
  ["_", "_", "X", "_", "_", "_", "_"],
  ["_", "_", "X", "X", "_", "_", "_"],
  ["_", "_", "O", "O", "X", "_", "_"],
  ["_", "O", "X", "O", "O", "X", "_"]
];
