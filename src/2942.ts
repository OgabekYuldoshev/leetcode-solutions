// 2942. Find Words Containing Character

// You are given a 0-indexed array of strings words and a character x.

// Return an array of indices representing the words that contain the character x.

// Note that the returned array may be in any order.

function findWordsContaining(words: string[], x: string): number[] {
  let result: number[] = [];

  words.forEach((w, i) => {
    if (w.includes(x)) {
      result.push(i);
    }
  });

  return result;
}

console.log(findWordsContaining(["leet", "code"], "e"));

// Input: words = ["leet","code"], x = "e"
// Output: [0,1]
// Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.
