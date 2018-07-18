// The goal is to print out a multiplication table that looks sort of like this:
// www.mathsisfun.com/definitions/multiplication-tables.html
// Recall that the result of multiplication is called a product. I use that word below.

// 1. Start by asking the user to enter what they want the table to go up to.
// On that website, for example, they go up to 12.

// Create an empty array called table. To fill up table with all of the products:
// Use two nested for loops that start at 1 and go up to whatever number the user typed in
// Every time the outer loop runs, create a new array called row
// Then, inside the inner loop, you should push the product of the two loop counters
// This means that every time the inner loop runs, a new product will get added to the row array
// Then, when the inner loop is over, push the row onto the table array
// This way, when the outer loop is done, table will have a bunch of rows

// Console.log the array to make sure it looks like what you expect
// For 3x3 it is: [ [ 1, 2, 3 ], [ 2, 4, 6 ], [ 3, 6, 9 ] ]


// 2. The array probably does not look like a multiplication table. Let's fix that.
// Using a for loop, go through table and console.log each row (which is itself an array)
// This should give you something that looks like
// [ 1, 2, 3 ]
// [ 2, 4, 6 ]
// [ 3, 6, 9 ]
// Try this with bigger numbers as well.



// 3. Bonus improvements (much harder)
// With double digit numbers, this doesn't look as nice:
// [ 1, 2, 3, 4 ]
// [ 2, 4, 6, 8 ]
// [ 3, 6, 9, 12 ]
// [ 4, 8, 12, 16 ]

// You could fix this by using nested loops to loop through each individual number
// and adjust the spacing! This is actually quite hard. You need to convert each
// number to a string, then look at the length and add space when needed so that
// each item takes up the same amount of space. It could eventually look like this:
//  1  2  3  4
//  2  4  6  8
//  3  6  9 12
//  4  8 12 16

// For now, I would stick to tables that only have up to two-digit numbers.
// In other words, don't bother perfecting this for anything beyond 9x9.
