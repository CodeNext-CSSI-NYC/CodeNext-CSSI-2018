// We will represent a tic-tac-toe board as a 2D array with three rows and three columns.
// At the start, each spot in each array will be filled in with an underscore: "_"
// When players make their moves, we will replace the "_" with either "X" or "O".

// I reference something called null a lot below. null is a special term in JavaScript
// that should be used without quotes. You can search online to read more about it.

// This is a global variable that will be either "X" or "O"
let player = "X";

// We will call this function later, but go ahead and fill it in now.
// It should look at the current value of player and switch it to be the other one.
// It should not return anything.
function switchPlayer() {

}

// Start by creating this 2D array called board.
let board = [];
// You should fill it in using two nested for loops.
// The inner loop should push underscores to a single array called row.
// The outer loop should push the row array to the board array.

// Your code here




// Create a render() function that displays the board nicely. It should look like:
// _ _ _
// _ _ _
// _ _ _
function render() {
  //
}



// This function takes in three squares from the board (which are either "X", "O", or "_")
// and returns either "X" (if all three have "X"), "O" (if all three have "O"),
// or null in any other case.
// It will be called by checkRows, checkColumns, and checkDiagonals.
function isTicTacToe(square1, square2, square3) {
  if (square1 != "_" && square2 == square1 && square2 == square3) {
    return square1;
  } else {
    return null;
  }
}



// This getWinner() function returns either "X", "O", "tie" or null.
// null in this case means that the game is not over yet.
// You need to fill in all the functions that this one calls.
// Getting these functions right is the hardest part.
// You should test this function with many different boards to make sure it works.
function getWinner() {
  if (checkRows() != null) {
    return checkRows();
  } else if (checkColumns() != null) {
    return checkColumns();
  } else if (checkDiagonals() != null) {
    return checkDiagonals();
  } else if (isBoardFull()) {
    return "tie";
  } else {
    return null;
  }
}

// This function should call isTicTacToe for each of the three rows in the board.
// If any of those three calls returns "X" or "O", then this function should
// return the same "X" or "O". If all three return null, then this should as well.
function checkRows() {
  // To get you started, here is an example of what I mean:
  let firstRowResult = isTicTacToe(board[0][0], board[0][1], board[0][2]);
}


// This function should call isTicTacToe for each of the three columns in the board.
// If any of those three calls returns "X" or "O", then this function should
// return the same "X" or "O". If all three return null, then this should as well.
function checkColumns() {

}


// This function should call isTicTacToe for each of the two diagonals in the board.
// If any of those two calls returns "X" or "O", then this function should
// return the same "X" or "O". If both return null, then this should as well.
function checkColumns() {

}

// This function should loop through the whole board. If any of the spots have "_"
// it should return false, since the board is not full. Otherwise it should return true.
// This is used to identify tie games (when the board is full but there is no winner).
function isBoardFull() {

}




// You can put a greeting here if you want to

// To actually play the game, we will use a while loop.
// Inside, you need to figure out a way to ask whoever's turn it is to make a move.
// You should probably do this by asking for a row and column separately.
// Ideally, you should check to make sure they entered 0-2 as row and as column,
// and that the spot they pick is actually empty. You could make a validMove()
// function to check that stuff and ask them again if they try to make an invalid move.
// You could also save that for later and be sure to only make valid moves for now.
// You should update the board with an "X" or "O" in the right spot
// (remember the player variable above is used to track whose turn it is)
// and then call switchPlayer().
// The while loop will then check if the game is over or not. null means that it is not.
while (getWinner() == null) {

}

// If your code gets to this point, that means the game is over.
// You can figure out who won (or if it was a tie) by calling getWinner() again.
// You should announce the outcome of the game.
