// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

// expectation is to create a function:
// that returns the third distict max number in the array
// IF there isn't a third distinct number, return the maximum number.

// SO we can sort so that we always have the first 3 positions in the index.
// input  =  [1,5,3,6,2,4]
// reverse sort [6,5,4,3,2,1]
// output = 4

// function will also recognize if the array only has two elements it will return the highest maximum in it's place.
// input  = [1,2]
// output = 2

// function will recognize duplicates but not return them.
// input  = [1,2,2,3]
// output = 1

// Reverse sort method, so we can ensure the maximums are in decending order. 1st max = index[0] .. 2nd max = index[1] .. 3rd max = index[2]
// Initiate variable that will take the top three maximums

// Iterate through with a max of up to three. No need to continue iteration.
// AND
// Create condition for duplicate cases, if there are duplicates don't include them / essentially skip.

// This here is for the case of only having 2 numbers in the test case. The length of numbers is less than 3 only return the first number in the index as it has been sorted reverse (the max) OR ELSE return the third maximum number.

// ==============================================================================================================================

function thirdMax(nums) {
  nums.sort((a, b) => b - a);

  let topThree = [];

  for (let i = 0; i < nums.length && topThree.length < 3; i++) {
    if (nums[i] !== nums[i - 1]) {
      topThree.push(nums[i]);
    }
  }

  if (topThree.length < 3) {
    return topThree[0];
  } else {
    return topThree[2];
  }
}

console.log(thirdMax([1, 2, 4, 3, 2, 3, 4, 5]));
// console.log(thirdMax([2, 1]));
