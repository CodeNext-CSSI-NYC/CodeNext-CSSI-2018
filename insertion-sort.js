// Overview: move each item as far forward as necessary to make sure
// the array up to that point is sorted

// Insertion sort uses nested for loops.
// The outer loop (i) should run from the first element to the last.
// The inner loop should run from i back down to 1.
// The goal of the inner loop is to identify where the i-th element belongs among the first i,
// ignoring for now all elements that come after.
// You should keep swapping the i-th element forward in the array until
// it is no longer smaller than the item to its left.

// The inner loop may swap items several times as it moves:
// if (arr[j] < arr[j - 1]) {
//   let temp = arr[j];
//   arr[j] = arr[j - 1];
//   arr[j - 1] = temp;
// }

// This inner loop moves each element into its proper spot among elements to its left,
// ignoring elements to its right.
// After this process happens many times, the array should be sorted.

// You can test it out with this.
arr = [2, 6, 1, 3, 8, 5, 7];
