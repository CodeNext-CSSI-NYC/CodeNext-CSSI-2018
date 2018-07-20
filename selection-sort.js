// Overview: Switch the smallest item into spot 1, switch the second smallest into spot 2, etc.


// Selection sort uses nested for loops.
// The outer loop (i) should run from the first element to the last.
// The inner loop should run from i to the last element.
// The goal of the inner loop is to identify the smallest element from index i to the end of the array.
// Once you have identified it (after the inner loop is over),
// you should swap the element at index i with the smallest element.
// So if you found the smallest element at minIndex, you would swap them like:

// let temp = arr[minIndex];
// arr[minIndex] = arr[i];
// arr[i] = temp;

// This moves the smallest element to the first spot,
// then the next smallest element to the second spot, and so on.
// After this process happens many times, the array should be sorted.

// You can test it out with this.
arr = [2, 6, 1, 3, 8, 5, 7];
