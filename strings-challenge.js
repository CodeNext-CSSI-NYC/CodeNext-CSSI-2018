//Author: FirstName LastName

/******************************************************************************
                                   withoutEnd()

Instructions:
Given a string, return a version without the first and last char, so "Hello"
yields "ell". The string length will be at least 2.

Examples:
withoutEnd("Hello") → "ell"
withoutEnd("java") → "av"
withoutEnd("coding") → "odin"

*******************************************************************************/
function withoutEnd(str) {

}

// Uncomment the line below to test this function.
// testWithoutEnd();




/******************************************************************************
                                   frontAgain()

Instructions:
Given a string of any length, return true if the first 2 characters in the
string also appear at the end of the string, such as with "edited".

Examples:
frontAgain("edited") → true
frontAgain("edit") → false
frontAgain("ed") → true

*******************************************************************************/
function frontAgain(str) {

}

// Uncomment the line below to test this function.
testFrontAgain();





/******************************************************************************
                                   withoutX2()

Instructions:
Given a string of any length, if one or both of the first 2 chars is 'x',
return the string without those 'x' chars, and otherwise return the string
unchanged.

Examples:
withoutX2("xHi") → "Hi"
withoutX2("Hxi") → "Hi"
withoutX2("Hi") → "Hi"
*******************************************************************************/
function withoutX2(str) {

}

// Uncomment the line below to test this function.
// testWithoutX2();




/****************************************************************************
                                    Tests
*****************************************************************************/
function testWithoutEnd() {
  console.log();
  console.log("withoutEnd(\"Hello\") → \"ell\" " + "\"" + withoutEnd("Hello") + "\"");
  console.log("withoutEnd(\"javascript\") → \"avascrip\" " + "\"" + withoutEnd("javascript") + "\"");
  console.log("withoutEnd(\"coding\") → \"odin\" " + "\"" + withoutEnd("coding") + "\"");
  console.log("withoutEnd(\"code\") → \"od\" " + "\"" + withoutEnd("code") + "\"");
  console.log("withoutEnd(\"ab\") → \"\" " + "\"" + withoutEnd("ab") + "\"");
  console.log("withoutEnd(\"Chocolate!\") → \"hocolate\" " + "\"" + withoutEnd("Chocolate!") + "\"");
  console.log("withoutEnd(\"kitten\") → \"itte\" " + "\"" + withoutEnd("kitten") + "\"");
  console.log("withoutEnd(\"woohoo\") → \"ooho\" " + "\"" + withoutEnd("woohoo") + "\"");
}

function testFrontAgain() {
  console.log();
  console.log("frontAgain(\"edited\") → true " + frontAgain("edited"));
  console.log("frontAgain(\"edit\") → false " + frontAgain("edit"));
  console.log("frontAgain(\"ed\") → true " + frontAgain("ed"));
  console.log("frontAgain(\"jj\") → true " + frontAgain("jj"));
  console.log("frontAgain(\"jjj\") → true " + frontAgain("jjj"));
  console.log("frontAgain(\"jjjj\") → true " + frontAgain("jjjj"));
  console.log("frontAgain(\"jjjk\") → false " + frontAgain("jjjk"));
  console.log("frontAgain(\"x\") → false " + frontAgain("x"));
  console.log("frontAgain(\"\") → false " + frontAgain(""));
  console.log("frontAgain(\"javascript\") → false " + frontAgain("javascript"));
  console.log("frontAgain(\"javascriptja\") → true " + frontAgain("javascriptja"));
}


function testWithoutX2() {
  console.log();
  console.log("withoutX2(\"xHi\") → \"Hi\" " + "\"" + withoutX2("xHi") + "\"");
  console.log("withoutX2(\"Hxi\") → \"Hi\" " + "\"" + withoutX2("Hxi") + "\"");
  console.log("withoutX2(\"Hi\") → \"Hi\" " + "\"" + withoutX2("Hi") + "\"");
  console.log("withoutX2(\"xxHi\") → \"Hi\" " + "\"" + withoutX2("xxHi") + "\"");
  console.log("withoutX2(\"Hix\") → \"Hix\" " + "\"" + withoutX2("Hix") + "\"");
  console.log("withoutX2(\"xaxb\") → \"axb\" " + "\"" + withoutX2("xaxb") + "\"");
  console.log("withoutX2(\"xx\") → \"\" " + "\"" + withoutX2("xx") + "\"");
  console.log("withoutX2(\"x\") → \"\" " + "\"" + withoutX2("x") + "\"");
  console.log("withoutX2(\"\") → \"\" " + "\"" + withoutX2("") + "\"");
  console.log("withoutX2(\"Hello\") → \"Hello\" " + "\"" + withoutX2("Hello") + "\"");
  console.log("withoutX2(\"Hexllo\") → \"Hexllo\" " + "\"" + withoutX2("Hexllo") + "\"");
  console.log("withoutX2(\"xHxllo\") → \"Hxllo\" " + "\"" + withoutX2("xHxllo") + "\"");
}
