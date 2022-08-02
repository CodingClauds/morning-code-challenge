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
