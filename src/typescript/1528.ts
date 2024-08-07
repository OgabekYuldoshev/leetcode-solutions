// 1528. Shuffle String

// You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

// Return the shuffled string.

function restoreString(s: string, indices: number[]): string {
  let result = [];

  for (let i = 0; i < indices.length; i++) {
    result[indices[i]] = s[i]
  }

  return result.join("")
}

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));

// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
