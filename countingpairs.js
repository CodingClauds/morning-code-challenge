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

// ============================================================================================================

// Input = Array of numbers
// Output = Single value counting the amount of Pairs. 20 + 20 = 1 unit value etc.

// Count the numbers of pairs for each number, in an array of numbers
//   Example input: [20, 20, 10, 20, 30, 10, 40, 50, 20, 30, 10, 10]
//   Example output: 5

// create a function that will take:
// input = array of numbers (can have multiple of the same numbers) ✅
// output = returns a single value as a number.

// create loop✅
// iterate through with a loop, check numbers✅
// sort numbers, easier to compare✅
// compare numbers to previous

// create variable ✅
// this holds counter/tally of all duplicates

// conditional statement✅
// if num is equal to num, add to count (variable)
// else if continue loop

// function countDoubles(num) {
//   let tally = 0;

//   num.sort((a, b) => a - b);
//   console.log(num);

//   for (let i = 1; i <= num.length; i += 2) {
//     console.log(i);
//     if (num[i] === num[i + 1]) {
//       tally++;
//     } else {
//       i--;
//     }
//   }
//   return tally;
// }

// console.log(countDoubles([20, 20, 10, 20, 30, 10, 40, 50, 20, 30, 10, 10]));
