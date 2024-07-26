// 2535. Difference Between Element Sum and Digit Sum of an Array

// You are given a positive integer array nums.

// The element sum is the sum of all the elements in nums.
// The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
// Return the absolute difference between the element sum and digit sum of nums.

// Note that the absolute difference between two integers x and y is defined as |x - y|.


function differenceOfSum(nums: number[]): number {
    let elementSum = 0
    let digitsSum = 0

    for (let num of nums) {
        elementSum += num
        digitsSum += recursiveSum(num)
    }
    
    return Math.abs(elementSum - digitsSum)
    
};

function recursiveSum(num:number):number {
    if (num === 0) {
        return 0;
    }
    return (num % 10) + recursiveSum(Math.floor(num / 10));
}


console.log(differenceOfSum([1,15,6,3]))
// Input: nums = [1,15,6,3]
// Output: 9
// Explanation: 
// The element sum of nums is 1 + 15 + 6 + 3 = 25.
// The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
// The absolute difference between the element sum and digit sum is |25 - 16| = 9.