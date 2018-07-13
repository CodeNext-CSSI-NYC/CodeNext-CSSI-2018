//Author: FirstName LastName

/******************************************************************************
                                   stringTimes()
Instructions:
Given a string and a non-negative integer n, return a larger string that is n
copies of the original string.

Examples:
stringTimes("Hi", 2) → "HiHi"
stringTimes("Hi", 3) → "HiHiHi"
stringTimes("Hi", 1) → "Hi"
*******************************************************************************/
function stringTimes() {

}

// Uncomment the line below to test this function.
// testStringTimes();

function testStringTimes() {
  console.log();
  console.log("stringTimes(\"Hi\", 2) → \"HiHi\" " + "\"" + stringTimes("Hi", 2) + "\"");
  console.log("stringTimes(\"Hi\", 3) → \"HiHiHi\" " + "\"" + stringTimes("Hi", 3) + "\"");
  console.log("stringTimes(\"Hi\", 1) → \"Hi\" " + "\"" + stringTimes("Hi", 1) + "\"");
  console.log("stringTimes(\"Hi\", 0) → \"\" " + "\"" + stringTimes("Hi", 0) + "\"");
  console.log("stringTimes(\"Hi\", 5) → \"HiHiHiHiHi\" " + "\"" + stringTimes("Hi", 5) + "\"");
  console.log("stringTimes(\"Oh Boy!\", 2) → \"Oh Boy!Oh Boy!\" " + "\"" + stringTimes("Oh Boy!", 2) + "\"");
  console.log("stringTimes(\"x\", 4) → \"xxxx\" " + "\"" + stringTimes("x", 4) + "\"");
  console.log("stringTimes(\"\", 4) → \"\" " + "\"" + stringTimes("", 4) + "\"");
  console.log("stringTimes(\"code\", 2) → \"codecode\" " + "\"" + stringTimes("code", 2) + "\"");
  console.log("stringTimes(\"code\", 3) → \"codecodecode\" " + "\"" + stringTimes("code", 3) + "\"");
}


/******************************************************************************
                                   hasb_b()
Instructions:
Return true if the given string contains a "b_b" string.
In other words, if it has the letter b, followed by any character, followed by another b.

Examples:
hasb_b("abcbob") → true
hasb_b("b9b") → true
hasb_b("bac") → false
*******************************************************************************/

function hasb_b() {

}

// Uncomment the line below to test this function.
testHasB_B();

function testHasB_B() {
  console.log();
  console.log("hasb_b(\"abcbob\") → true " + hasb_b("abcbob"));
  console.log("hasb_b(\"b9b\") → true " + hasb_b("b9b"));
  console.log("hasb_b(\"bac\") → false " + hasb_b("bac"));
  console.log("hasb_b(\"bbb\") → true " + hasb_b("bbb"));
  console.log("hasb_b(\"abcdefb\") → false " + hasb_b("abcdefb"));
  console.log("hasb_b(\"123abcbcdbabxyz\") → true " + hasb_b("123abcbcdbabxyz"));
  console.log("hasb_b(\"b12\") → false " + hasb_b("b12"));
  console.log("hasb_b(\"b1b\") → true " + hasb_b("b1b"));
  console.log("hasb_b(\"b12b1b\") → true " + hasb_b("b12b1b"));
  console.log("hasb_b(\"bbc\") → false " + hasb_b("bbc"));
  console.log("hasb_b(\"bbb\") → true " + hasb_b("bbb"));
  console.log("hasb_b(\"bb\") → false " + hasb_b("bb"));
  console.log("hasb_b(\"b\") → false " + hasb_b("b"));
}
