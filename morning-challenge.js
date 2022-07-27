// Morning Challenge:
// Find the smallest integer in a given array.
// function findSmallestInteger(array) {
//     let int = array[0]
//     for (let i = 1; i < array.length; i++){
//         if (int >= array[i]){
//             int = array[i]
//         }
//     }
//     return int
// }
// function findSmallestInteger(array) {
//     return Math.min(...array);
// }
// function findSmallestInteger(array) {
//     let int = array[0]
//     array.forEach((num) => {
//         int = num < int ? num : int
//     })
//     return int
// }

// Write a function loopArray that loops thru the array in a specified direction by some number of steps.

// By "looping array" it means removing elements from the start and adding them to the end of the array.

// One-by-one (If direction is left) or rmeoving from the end and adding them to the start. one by one. (If direction is right)

// Function should accept three arrguments:
// array - non-empty array of elements of any type;
// direction - left or right - tells how to loops array;
// steps - number of steps tot loop array (less or equal to array size);

// Examples:

// loopArray ([1, 5, 87, 45, 8, 8], "left", 2);
// should produce result: [87, 45, 8, 8, 1, 5]

// loopArray ([1, 5, 87, 45, 8, 8], "right", 2);
// should produce result: [8, 8, 1, 5, 87, 45]

// function loopArray(array, direction, steps) {
//     if (direction === 'left'){
//         for(let i = 0; i < steps; i++){
//             const shiftedItem = array.shift();
//             array.push(shiftedItem);
//         } else if(direction === 'right'){
//             for(let i = 0; i < steps; i++) {
//                 const shiftedItem = array.pop();
//                 array.unshift(shiftedItem);
//             }
//         }
//         return array;
//     }
// }

// console.log([1, 5, 87, 45, 8, 8], "left", 2);

// Write a function to check whether a passed string is a palindrome or not. (Mom, Racecar etc.)

// .split() than .reverse() and compare to orignal string..  then .join()

// function palindrome(string) {
//   const textChecker = string.split("");
//   const reverseArray = textChecker.reverse();
//   if (reverseArray.join("") === string) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(palindrome("nono"));

// ================== alternatingCase ======================

// Question:
// Create a function that takes a string as a parameter and alternates the casing of each individual letter within the string. Eg. Hello World! => hELLO wORLD!

// ==========================================================

// Solution(s):

// Using a forloop
// function alternatingCase(string) {
//   string = string.split(" ");
//   let newString = [];
//   for (let i = 0; i < string.length; i++) {
//     let word = string[i];
//     word = word.split("");
//     let newWord = [];
//     for (let x = 0; x < word.length; x++) {
//       if (word[x] === word[x].toUpperCase()) {
//         newWord.push(word[x].toLowerCase());
//       } else {
//         newWord.push(word[x].toUpperCase());
//       }
//     }
//     newWord = newWord.join("");
//     newString.push(newWord);
//   }
//   return newString.join(" ");
// }

// // using array methods
// function alternatingCase(string) {
//   string = string.split(" ");
//   let newString = string.map((word) => {
//     return word
//       .split("")
//       .map((letter) =>
//         letter.toUpperCase() === letter
//           ? letter.toLowerCase()
//           : letter.toUpperCase()
//       )
//       .join("");
//   });
//   return newString.join(" ");
// }

// console.log(alternatingCase("Hello World!"));

// Input = Array of numbers
// Output = Single value counting the amount of Pairs. 20 + 20 = 1 unit value etc.

// Count the numbers of pairs for each number, in an array of numbers
//   Example input: [20, 20, 10, 20, 30, 10, 40, 50, 20, 30, 10, 10]
//   Example output: 5

// const countingPairs = (arrOfNums) => {
//   let counter = 0;
//   arrOfNums.sort((a, b) => a - b);
//   for (let i = 0; i < arrOfNums.length; i += 2) {
//     if (arrOfNums[i] === arrOfNums[i + 1]) {
//       counter++;
//     } else {
//       i--;
//     }
//   }
//   return counter;
// };
// const array = [20, 20, 10, 20, 30, 10, 40, 50, 20, 30, 10, 10];
// console.log(countingPairs(array));

// Super Secret Password

// Question:

// System Admins are always on your case to improve the strength of your passwords. You could really use a handy function to make your passwords completely unhackable. Use the super secret characters in the superSecretChars variable to replace the matching characters in your totally insecure  pasword and make it unhackable.

// Replace all the 'a' with '@'. ALSO include the UPPERCASE characters in case they want to YELL.

// const superSecretChars = [
//   ["a", "@"],
//   ["s", "$"],
//   ["o", "0"],
//   ["h", "5"],
//   ["x", "*"],
// ];

// Write a Function that replaces each.

// Input: Password the user puts in.
// Output: Characters that match then get replaced with supersecretcharacters. New string

// For-loop with a conditional if this OR if this OR if this.. etc and ELSE return "Invalid password character"

// Itterate over superSecretChars which is an array of arrays [Strings]

// function unhackablePassword(password) {
//   return password
//     .toLowerCase()
//     .replaceAll("a", "@")
//     .replaceAll("s", "$")
//     .replaceAll("o", "0")
//     .replaceAll("h", "5")
//     .replaceAll("x", "*");
// }

// console.log(unhackablePassword("pasSword"));

// Create a function called "sortString" that will sort a given string.
// "Index" = 1-9 not starting from 0 *NO SENTENCE MORE THAN 9 WORDS*

// function sortString(inputArr) {
//   inputArr.split(' ');

//   const sortString = (string) => {
//     const results = [];
//     const splitString = string.split(' ');

//     splitString.forEach((word) => {
//       for(let i = 0; i < word.length; i++)
//     })
//   }
// split words
// than sort by number / than for-loop 1-9 thru the elements
// Join words back
// push to new array

// else return empty string

// Each word in the stirng will contain a single number
// This number is the position the word should have in the result.
//
// Input string is empty return an empty string.

// The words in the input string will only contain colid consecutive numbers.

// Exp: Input = "is2 Thi1s T4est 3a" => Output = "Thi1s is2 3a T4est"

// Exp: Input = "4of Fo1r pe6ople g3ood th5e the2" => Output = "Fo1r the2 g300d 4of th5e pe6ople"

// let sortString = (sentence) => {
//   let arr = sentence.split(" ");
//   let newString = [];
//   arr.forEach((word) => {
//     word.split("").forEach((char) => {
//       if (!!Number(char)) {
//         newString[char] = word;
//       }
//     });
//   });
//   return newString.join(" ");
// };
// console.log(sortString("is2 Thi1s T4est 3a"));

// ===========================================================

// Given an array of integers, that are sorted in ascendeing order and target integer.
// No array methods, look into binary search.

// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9 Output: 4 Explanation: 9 exists in nums and its index is 4

// Example 2: Input: nums = [-1,0,3,5,9,12],Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1;
// Explanation: 2 does not exist in nums so return -1

// Write a function that tells you whether or not a number is in the arrray or not
// If target exists in the array return the index = [i] IF NOT return a value = -1

// Binary Search

// ================================

// Given an array of integers, return indices of the two numbers such that they add up to a specific target, you may assume that each input would have exactly one solution and you may not use the same element twice.

// Example:
// Given nums = [2,7,11,15], target = 9
// Because nums[0] + nums[1] = 2 + 7 = 9
// Return [0,1]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Problem:
// Return the indicies of the two numbers such that they add up to a specific target.

// Positive number => target = x
// x equals the sum of the numbers in the array.

// Ex: if x = 15 and the array has [5,5,1,5]
// We want the index of 0,1,3

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// input: [10,20,30,40,50,60,70,80,90]
// output: [1,2,3,4,5,6,7,8,9,1,0,0,0,0,0,0,0,0,0,]

// loop => splice =>

// 2 variables

// const zeros = [];
// const noZero = [];

// const sortZeros = (nums) => {
//   nums.forEach((num) => {
//     if (num === 0) {
//       zeros.push(num);
//     } else {
//       noZero.push(num);
//     }
//   });

//   return (result = noZero.concat(zeros));
// };

// console.log(sortZeros([1, 0, 2, 0, 3, 0, 4, 0, 5, 0, 6, 0, 7, 0, 8, 0, 9, 0]));

// // IF YOU WANT TO DO ANYY NUMBERS YOU NEED TO SPLICE

// const moveZeros = (nums) => {
//   nums.forEach((num, index) => {
//     if (num === 0) {
//       nums.splice(index, 1);
//       nums.push(0);
//     }
//   });
//   return nums;
// };

// console.log(moveZeros([10, 20, 30, 40, 50, 60, 70, 80, 90]));
