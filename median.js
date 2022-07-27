// Given 2 sorted arrays num1 and num2
// return the mdeian of the 2 arrays;

// ex nums1 = [1,3] nums2 = [1,2,3] output = 2

// What is the median? Median value is the middle value of the list.

// Sort the numbers from smallest to largest.

// total index of nums = 3

// formula:
// {(3 + 1) ÷ 2}th
// = {(4) ÷ 2}th
// = {2}th

// const findMedian = (nums1, nums2) => {
//   //Merge two num arrays
//   const mergedNums = [...nums1, ...nums2];

//   //Sort the merged array
//   mergedNums.sort();

//   //If the merged array has an even number length
//   if (mergedNums.length % 2 === 0) {
//     const firstMedian = mergedNums[mergedNums.length / 2 - 1];
//     const secondMedian = mergedNums[mergedNums.length / 2];
//     return (firstMedian + secondMedian) / 2;
//   }

//   //If mergedNums has an odd number length
//   else {
//     return mergedNums[Math.floor(mergedNums.length / 2)];
//   }
// };

// console.log(findMedian([1, 2], [5, 6]));
