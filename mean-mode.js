// ================================ Expectations ========================================
// // Everytime you run a list of numbers (array), it should be able to:

// // 1. add up the total (sum) the list and divide by the amount in the list (array) giving you a average / mean
// // mean = all numbers in arr divided by the amount in the arr. typical avg
// // 1 + 2 + 3 / 3

// // 2. Second it should run through all the numbers in the list and see if there is any numbers that repeat more than once. Always returning the highest repeating number.
// // mode = most repeated number in arr
// // [1,2,3] = 0 || [1,2,3,3] = 3 || [1,2,3,3,5,5,5,5,5] = 5

// // 3. Create a conditional statement that compares both mean & mode values,  IF they = OR ≠ eachother; return a boolean value of true OR false.

// Index to Value Array:
//   // [0, 1, 2, 3, 4, 5, 6, 7, 8];
//   // [1, 2, 2, 2, 2, 3, 5, 5, 5];

// Index Map:
//     // i = 1 => value = 2; currentCount = 1 ; Mode = 1 modeCount = 1
//     // i = 2 => value = 2; currentCount = 2 ; Mode = 2 modeCount = 2
//     // i = 3 => value = 2; currentCount = 3 ; Mode = 2 modeCount = 3
//     // i = 4 => value = 2; currentCount = 4 ; Mode = 2 modeCount = 4
//     // i = 5 => value = 3; currentCount = 4 ; Mode = 2 modeCount = 4

//     // i = 6 => value = 5; currentCount = 4 ; Mode = 2 modeCount = 4
//     // i = 7 => value = 5; currentCount = 5 ; Mode = 2 modeCount = 5
//     // i = 7 => value = 5; currentCount = 5 ; Mode = 5 modeCount = 5

// ================================ Expectations ========================================

// ================================ Test Cases ==========================================

// // let arrayOfNums = [5, 5, 5, 5, 3, 1, 2, 2, 2, 2, 6, 6, 6, 6];

// let arrayOfNums = [1, 2, 3]; // return false / 0

let arrayOfNums = [4, 4, 4, 6, 2]; // return true / 1

// ================================ Test Cases ==========================================

function MeanMode(arrayOfNums) {
  let mean = 0;
  let averageSum = 0;

  // expected ouput should return 1 number that is most frequent in the array
  let mode = 0; // Expected output = 2

  // frequency, how many times it counts the repeating number
  let modeCount = 1;

  // This will keep track of frequency of numbers in the array
  let currentCount = 1;

  // Sort numbers in array
  arrayOfNums.sort((a, b) => a - b);

  for (let i = 1; i < arrayOfNums.length; i++) {
    if (arrayOfNums[i] === arrayOfNums[i - 1]) {
      currentCount++;
    } else {
      currentCount = 1;
    }

    if (currentCount > modeCount) {
      mode = arrayOfNums[i - 1];
      modeCount = currentCount;
    }
  }

  arrayOfNums.forEach((num) => {
    averageSum += num;
  });

  console.log(averageSum);
  mean = averageSum / arrayOfNums.length;

  console.log(mean, "mean");
  console.log(mode, "mode");

  // This ternary returns a boolean value when "mode" strickly equals "average".
  mean === mode ? console.log(true) : console.log(false);

  return arrayOfNums;
}

// keep this function call here
// console.log(MeanMode(arrayOfNums));
MeanMode(arrayOfNums);
