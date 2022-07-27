// // Create a function to remove duplicates.

// // let removeDuplicates = (array) => {
// //   let newArray = {};
// //   for (let i = 0; i < array.length; i++) {
// //     if (newArray.indexOf(i) === false) {
// //       newArray.push(i)
// //     }
// //   }
// //   return array;
// // }

// // console.log(removeDuplicates([1, 1, 1, 2, 3, 4, 4, 4]))

// // =====================================================

// // solution:
// // - change assignment of newArray to be an array, not an object
// // - check for indexOf array[i] (current value) not index (i)
// // - check for indexOf to be strictly equals to -1
// // - push the current value to the newArray, not the index
// // - return the newArray, not the original array

// // let removeActualDuplicates = (nums) => {
// //   let newNumsList = [];
// //   for (let i = 0; i < nums.length; i++) {
// //     if (newNumsList.indexOf(nums[i]) === -1) {
// //       newArray.push(array[i])
// //     }
// //   }
// //   return newArray;
// // }

// // console.log(removeActualDuplicates([1, 1, 1, 2, 3, 4, 4, 4]))

// // =========================================================================================================

// // Create a function to remove duplicates.

// // input: [1, 1, 1, 2, 3, 4, 4, 4]
// // output: [1, 2, 3, 4]

// // there are duplicates, remove and return only one value of each
// // we will create function
// // iterate through the array (think for loop, forEach/map etc.)

// // create new array to hold new value
// // for loop to compare to previous object in array:
// // if x ≠ x continue loop
// // else x = x remove index from array

// // and return an array with the new values

// function removeDoubles(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i - 1]) {
//       console.log(`match @index ${i}`);
//       nums.splice(i, 1);
//       i--;
//     } else {
//       console.log("no match");
//     }
//   }
//   return nums;
// }
// let arr = [1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 67];
// // console.log(arr);
// console.log(removeDoubles(arr));
