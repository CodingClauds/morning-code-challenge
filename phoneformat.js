// /*
//   Write a function that will take a string and convert it to a phone format, ie "(416) 123-4567"
//   consider that a user can input text characters or special characters ("(", ")", "-", " ")
//   themselves and function needs to account for that in output
// */

// // Handle Characters outside of what we want?

// // "4161234567" => "(416) 123-4567"
// // "[41612?3&4567]" => "(416) 123-4567"

// // Create Function
// // Input = "String" / Output = "String"
// // Text Chars and Special Chars

// // Split the original string into an array of characters
// // Loop through array
// // For each character
// // Convert string to number
// // Check each of the character if it is a number
// // If yes, add to new array.
// // If no, do nothing.

// // Split the array of numbers in to 3 sections.
// //      - 1 Section = Index of 0-2.
// //      - 2nd Section = Index of 3-5
// //      - 3rd Section = Index of 6-9
// // => [4,1,6] [1,2,3] [4,5,6,7]

// // Join each array into a string.
// // Create a template string
// // Inject each string their respective spots

// const formatPhoneNumber = (input) => {
//   const characterArray = input.trim().split("");
//   const numberArray = [];

//   characterArray.forEach((character) => {
//     //      console.log(typeof Number(character));
//     if (!isNaN(parseInt(character))) {
//       numberArray.push(character);
//     }
//   });
//   console.log(numberArray);
//   let sectionOne = numberArray.slice(0, 3).join("");
//   let sectionTwo = numberArray.slice(3, 6).join("");
//   let sectionThree = numberArray.slice(6).join("");

//   //     console.log(sectionOne,sectionTwo,sectionThree)
//   return `(${sectionOne}) ${sectionTwo}-${sectionThree}`;
// };

// console.log(formatPhoneNumber("416       1234567"));
// console.log(formatPhoneNumber("[41612?3&4567]"));

// const formatPhoneNumber2 = (input) => {
//   const numbers = input.match(/[0-9]/g);
//   return `(${numbers.slice(0, 3).join("")}) ${numbers
//     .slice(3, 6)
//     .join("")}-${numbers.slice(6).join("")}`;
// };

// console.log(formatPhoneNumber2("416       1234567"));
// console.log(formatPhoneNumber2("[41612?3&4567]"));
