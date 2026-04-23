/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean(false);//boolean is false
if (isValid) {
    console.log("This is valid!");
}
else
console.log("This is invalid!" );
let age = "25";
let totalAge = Number(age) + 5;//string convert to number then will get expected output 30
console.log("Total Age: " + totalAge);

//Implicit type conversion
let num = 5;
let str = "10";

let implicitResult = num + str; // number gets converted to string

console.log("IMPLICIT CONVERSION:");
console.log("Before:", typeof num, "+", typeof str);
console.log("Result:", implicitResult);
console.log("After:", typeof implicitResult);

// Edge case: null in arithmetic
let nullValue = null;
let implicitNullResult = nullValue + 5; // null becomes 0

console.log("IMPLICIT CONVERSION (null edge case):");
console.log("Before:", typeof nullValue);
console.log("Result:", implicitNullResult);
console.log("After:", typeof implicitNullResult);




// EXPLICIT TYPE CONVERSION

let strNumber = "123";
let explicitResult = Number(strNumber);

console.log("EXPLICIT CONVERSION:");
console.log("Before:", typeof strNumber);
console.log("Result:", explicitResult);
console.log("After:", typeof explicitResult);

// Edge case: undefined to number (NaN)
let undefinedValue;
let explicitUndefinedResult = Number(undefinedValue);

console.log("EXPLICIT CONVERSION (undefined → NaN):");
console.log("Before:", typeof undefinedValue);
console.log("Result:", explicitUndefinedResult);
console.log("Is NaN:", isNaN(explicitUndefinedResult));
console.log("After:", typeof explicitUndefinedResult);


// Edge case: invalid string to number (NaN)
let invalidString = "hello";
let invalidConversion = Number(invalidString);

console.log("EXPLICIT CONVERSION (invalid string → NaN):");
console.log("Before:", typeof invalidString);
console.log("Result:", invalidConversion);
console.log("Is NaN:", isNaN(invalidConversion));
console.log("After:", typeof invalidConversion);
