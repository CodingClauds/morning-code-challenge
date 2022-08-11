// Print the numbers from 1 to 100, but for multiples of 3 print “Fizz” instead of the number, and for the multiples of five print “Buzz”. For numbers which are multiples of both 3 and 5, print “FizzBuzz”. The output should look something like this:

//Example:
// Input: n = 3
// Output: ["1","2","Fizz"]

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"] etc.

// ========================================================================================================

// Numbers from 1 - 100, assumed in order (no need for a sort method)

// multiples of 3 print fizz, not a number
// 3,6,9,12,15,18,21 etc

// multiples of 5 print buzz, not a number
// 5,10,15,20,25,30,35 etc

// multiples of both 3 & 5 print fizzbuzz, not a number
// 15,30,45,60,75,90 etc

// ========================================================================================================

// create a function
// that accepts a single number as an input, (10).
// iterate over 1 => n (loop)

// convert integer to string
// write a conditional
// for multiples of 3
// n % 3 == 0
// for multiples of 5
// n % 5 == 0
// for multiples of 3 & 5 (Example=15)
// n % 3 == 0 && n % 5 == 0

// function returns an array of strings
// return ['string']

// function fizzBuzz(n) {
//   let result = [];
//   console.log(n);

//   for (let i = 1; i <= n; i++) {
//     // result.push(i);
//     if (i % 3 === 0 && i % 5 === 0) {
//       result.push("fizzbuzz");
//     } else if (i % 3 === 0) {
//       result.push("fizz");
//     } else if (i % 5 === 0) {
//       result.push("buzz");
//     } else {
//       result.push(i.toString());
//     }
//   }
//   return result;
// }

// console.log(fizzBuzz(100));
// /**
//  * @param {number} n
//  * @return {string[]}
//  */

// function fizzBuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       // toLocaleString()
//       console.log(i);
//     }
//   }
// }

// console.log(fizzBuzz("15"));
