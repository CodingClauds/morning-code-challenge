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
