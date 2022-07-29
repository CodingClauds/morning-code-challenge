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
