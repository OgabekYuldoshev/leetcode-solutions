// 1773. Count Items Matching a Rule

// You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

// The ith item is said to match the rule if one of the following is true:

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.

function countMatches(
  items: string[][],
  ruleKey: string,
  ruleValue: string
): number {
  let count = 0;

  for (let [type, color, name] of items) {
    switch (ruleKey) {
      case "color":
        if (color === ruleValue) count++;
        break;
      case "name":
        if (name === ruleValue) count++;
        break;
      case "type":
        if (type === ruleValue) count++;
        break;
    }
  }

  return count;
}

console.log(
  countMatches(
    [
      ["phone", "blue", "pixel"],
      ["computer", "silver", "lenovo"],
      ["phone", "gold", "iphone"],
    ],
    "color",
    "silver"
  )
);

// Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
// Output: 1
// Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].
