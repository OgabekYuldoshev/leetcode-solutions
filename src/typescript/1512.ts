// 1512. Number of Good Pairs

// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

function numIdenticalPairs(nums: number[]): number {
    let counter  = 0
    for (let i = 0; i < nums.length; i++) {
        const a1 = nums[i];
        for (let g = i + 1; g < nums.length; g++) {
            const a2 = nums[g];
            if(a1 === a2){
                counter++
            }
        }
    }

    return counter
};

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

console.log(numIdenticalPairs([1,1,1,1]))