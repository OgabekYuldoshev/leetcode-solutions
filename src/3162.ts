// 3162. Find the Number of Good Pairs I

// You are given 2 integer arrays nums1 and nums2 of lengths n and m respectively. You are also given a positive integer k.

// A pair (i, j) is called good if nums1[i] is divisible by nums2[j] * k (0 <= i <= n - 1, 0 <= j <= m - 1).

// Return the total number of good pairs.

function numberOfPairs(nums1: number[], nums2: number[], k: number): number {
  let result = 0;

  nums1.forEach((n) => {
    nums2.forEach((m) => {
      if (n % (m * k) === 0) {
        result++;
      }
    });
  });

  return result;
}

// Example 1:

// Input: nums1 = [1,3,4], nums2 = [1,3,4], k = 1

// Output: 5

// Explanation:

// The 5 good pairs are (0, 0), (1, 0), (1, 1), (2, 0), and (2, 2).

// console.log(numberOfPairs([1, 3, 4], [1, 3, 4], 1));

console.log(numberOfPairs([1, 2, 4, 12], [2, 4], 3));
