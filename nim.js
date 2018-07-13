// Author: FirstName lastName
let readline = require("readline-sync");

/******************************************************************************
                                  printGreeting()
  Prints a simple greeting. Be as creative as you want here. Be sure to include
  your name as the author!
*******************************************************************************/
function printGreeting() {

}



/******************************************************************************
                                  chooseStartingPlayer()
  Randomly returns either 1 or 2, indicating which player will go first.
*******************************************************************************/
function chooseStartingPlayer() {

}



/******************************************************************************
                                  switchPlayer()
  If the currentPlayer is 1 this function returns 2, and vice versa.
*******************************************************************************/
function switchPlayer(currentPlayer) {

}



/******************************************************************************
                                  printStones()
  Print a visual representation of the number of stones remaining (e.g., a line
  of "O" characters), along with a message that conveys this same information.

  Hint: Create a local string variable and use a for loop to concatenate "O "
  to it every iteration!
*******************************************************************************/
function printStones(numStonesRemaining) {

}



/******************************************************************************
                                  removeStones()
  This function is the "workhorse" of the program. It is called repeatedly in
  run() until there are no more stones remaining.

  It first asks the currently active player (as denoted by currentPlayer) to
  enter the number of stones they would like to remove. Players should only be
  allowed to enter values 1, 2, or 3. If they enter any other value, the program
  should lightly scold them and then ask again, and continue to do so until they
  enter a valid number.

  Moreover, if players enter a valid number but there aren't that many stones
  remaining (e.g., they enter 3 but there are only 2 stones remaining), the
  program should tell them this, then ask for input again, just like above.

  When players have finally entered an acceptable number, this function
  should subtract that number from numStonesRemaining and return the updated numStonesRemaining.
*******************************************************************************/
function removeStones(currentPlayer, numStonesRemaining) {

}



/******************************************************************************
                                  sayWhoWon()
  This function is called in run() when there are no more stones remaining. It
  first prints a "Player X Wins!" message!
  Remember that we switch who the current player is at the end of removeStones --
  make sure you correctly identify which player won!
*******************************************************************************/
function sayWhoWon(currentPlayer) {

}



/******************************************************************************
                                  run()
  This is the "main" function that calls all the other functions. Here is what
  it should do, in order:
  1. Print a greeting.
  2. Choose a starting player (make sure to store the result in a currentPlayer variable).
  3. Set numStonesRemaining to 10.
  4. As long as there are stones remaining, continue running the following:
    A. Print the stones remaining.
    B. Ask the current player to remove stones (make sure they enter 1, 2, or 3).
        Make sure to update numStonesRemaining based on the return value of removeStones.
    C. Switch whose turn it is. Make sure to store the result in the currentPlayer variable.
  5. Since there are no more stones remaining, say who won.
*******************************************************************************/
function run() {

}



// Run the program!
run();
