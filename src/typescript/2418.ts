// 2418. Sort the People

// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

// For each index i, names[i] and heights[i] denote the name and height of the ith person.

// Return names sorted in descending order by the people's heights.

function sortPeople(names: string[], heights: number[]): string[] {
  let newNames: string[] = [];

  let heightsObj = {} as { [key: string]: string };

  for (let i = 0; i < heights.length; i++) {
    heightsObj[heights[i]] = names[i];
  }

  heights = heights.sort((a, b) => b - a);

  for (let i = 0; i < heights.length; i++) {
    newNames.push(heightsObj[heights[i]]);
  }

  return newNames;
}

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));

// Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// Output: ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.
