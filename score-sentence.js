// // ================== scoreSentence ======================

// // Question:
// // Given a string of words (sentence), you need to find the highest scoring word. Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc. You need to return the highest scoring word as a string. If two words score the same, return the word that appears earliest in the original string. All letters will be lowercase and all inputs will be valid.

// // =======================================================

// const input1 = "an exemplar string";
// const input2 = "add dad";

// function scoreSentence(input) {
//   // highestScore keeps track of count
//   let highestScore = 0;

//   let output = "";

//   // Split the alphabet to its indiviudal letter to then give it a value +1.
//   charCodeAt();
//   const legend = "abcdefghijklmnopqrstuvwxyz".split("");
//   // OR
//   // letter.charOfCode() - 96;

//   //
//   const words = input.split(" ");

//   for (const word of words) {
//     const letters = word.split("");
//     let wordScore = 0;
//     // This now will take the sentence and add value to it, starting from wordScore = 0 + 1.
//     for (const letter of letters) {
//       wordScore += legend.indexOf(letter) + 1;
//     }

//     if (wordScore > highestScore) {
//       highestScore = wordScore;
//       output = word;
//     }
//   }

//   return output;
// }

// scoreSentence(input1);
// scoreSentence(input2);
