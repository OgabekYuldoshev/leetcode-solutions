# 2828. Check if a String Is an Acronym of Words

# Given an array of strings words and a string s, determine if s is an acronym of words.

# The string s is considered an acronym of words if it can be formed by concatenating the first character of each string in words in order. For example, "ab" can be formed from ["apple", "banana"], but it can't be formed from ["bear", "aardvark"].

# Return true if s is an acronym of words, and false otherwise.

from typing import List


class Solution:
    def isAcronym(self, words: List[str], s: str) -> bool:
        ans = ''
        for word in words:
            ans += word[0]
        return ans == s

s = Solution()

print(s.isAcronym(["alice","bob","charlie"], "abc"))

# Input: words = ["alice","bob","charlie"], s = "abc"
# Output: true
# Explanation: The first character in the words "alice", "bob", and "charlie" are 'a', 'b', and 'c', respectively. Hence, s = "abc" is the acronym. 