// You are given an integer array nums. In one operation, you can add or subtract 1 from any element of nums.

// Return the minimum number of operations to make all elements of nums divisible by 3.

function minimumOperations(nums: number[]): number {
  let operationCounter = 0;

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i] || 0
    if ((value % 3) !== 0) {
      operationCounter++;
    }
  }

  return operationCounter;
}

// Example 1:
// Input: nums = [1,2,3,4]
// Output: 3

// Explanation:

// All array elements can be made divisible by 3 using 3 operations:

// Subtract 1 from 1.
// Add 1 to 2.
// Subtract 1 from 4.

console.log(minimumOperations([3,6,9]));
