/****************
We are going to create a memory game, similar to https://en.wikipedia.org/wiki/Concentration_(game).
In the basic version, we will shuffle up the numbers from 0 to 3, and the player
will try to uncover the pairs. So the cards might look like 2, 3, 1, 2, 1, 0, 0, 3.
We will display their progress using X to indicate cards that have not been revealed.
So partway through the game we might see 2, 3, X, 2, X, X, X, 3.
Players will guess two indexes at a time to reveal to try to make matches.
So in this example, they revealed the 2's by guessing 0 and 3, since those are
the indexes where we see the 2's in the array above.
We will use two different arrays. One will have all of the correct answers
(so in this example it will contain [2, 3, 1, 2, 1, 0, 0, 3] throughout).
The other "tracker" array will keep track of how the player is doing.
So it might [2, 3, "X", 2, "X", "X", "X", 3] at one point.
Once you have the game working, feel free to add any features you want.
You will need to read carefully and fill in all of the functions below based on
the descriptions I have provided.
****************/

let shuffle = require("shuffle-array");
let readline = require("readline-sync");

// This function takes in the tracker array and checks whether or not it contains any X's
// If it contains an X, it should return false, because the game is not over.
// If it contains no X's, it should return true, because the game is over.
function isGameOver(tracker) {
  // Your code here
}

// This function prints out the tracker array so that the user can see how they are doing.
// An example printout is 0 3 X X 0 X X 3
// It does this by:
// Creating an empty string.
// Going through the array using a for loop.
// Each time through the loop it adds the corresponding item from the tracker to the new string,
// and then adds a space to the new string.
// After the loop is over, it prints out this string.
function render(tracker) {
  // Your code here
}

// This function returns a shuffled array of numbers, like [2, 3, 1, 3, 0, 2, 0, 1]
// It does this as follows:
// Create empty array
// Use a for loop up to numMatches, which is passed into the function (in the example above, numMatches is 4)
// Inside the for loop, add the index to the array twice (two zeroes, two ones, etc.). Add numbers one at a time.
// The last line should be: return shuffle(arr)
// This will shuffle and return the array.
function shuffleCards(numMatches) {
  // Your code here
}

// This function returns an array like ["X", "X", "X", "X", "X", "X", "X", "X"]
// The X means that the player has not guessed that number yet.
// Over time, the X's will be replaced by numbers the player has matched.
// It does this as follows:
// Create empty array
// Use a for loop up to numMatches, which is passed into the function (in the example above, numMatches is 4)
// Inside the for loop, add "X" to the array twice. Add the X's one at a time.
// So if numMatches is 4, we will have 8 X's.
// Return this array.
function createTracker(numMatches) {
  // Your code here
}

// This function controls the whole game.
// Use a while loop that keeps going as long as the game is not over.
// (Use your isGameOver function above to know if that's the case or not.)
// Inside the while loop:
//   Render the tracker array
//   Increase numGuesses by 1, since the player is about to guess
//   Ask the player for the first spot they want to flip over (an index in the array)
//   Ask the player for the second spot they want to flip over (an index in the array)
//   Store their guesses as index1 and index2
//   Store the current values that are in the tracker array at index1 and index 2 in
//     two variables called current1 and current2, in case we need to flip the cards back later.
//   Set tracker[index1] to answer[index1]. This means we are going to briefly reveal the card at that spot.
//   Do the same with index2.
//   Call console.clear() to stop showing cards from the previous round.
//   Render the tracker array, showing the player the cards they flipped over.
//   If the cards they flipped over (which are in tracker[index1] and tracker[index2])
//     are not the same, or if the player chose the same index for both guesses,
//     flip the cards back over by setting tracker[index1] to current1 and the
//     same for 2. This returns the cards to how they were before this guess.
// After the game is over, print out a message saying how many guesses it took
//   the player to reveal all the cards.
function play() {
  // This line controls how many pairs of numbers will be in the game.
  // I recommend starting with 4 pairs and trying bigger numbers later.
  let numMatches = 4;
  // Don't change these next three lines.
  let answer = shuffleCards(numMatches);
  let tracker = createTracker(numMatches);
  let numGuesses = 0;
  console.clear();
  // Your code here
}

function run() {
  console.clear();
  play();
}

run();
