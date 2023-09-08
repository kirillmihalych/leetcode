// dp meo without recursion
// Time O(n ^ 2) || Space O(n)
// https://leetcode.com/problems/extra-characters-in-a-string/

function minExtraChar(s, dictionary) {
  // Create a set to store the words from the dictionary for efficient lookups.
  const dict = new Set(dictionary)

  // Get the length of the input string.
  const n = s.length

  // Initialize an array to store the minimum extra characters needed for substrings of s.
  const memo = new Map()

  for (let i = 1; i <= n; i++) {
    // Start by assuming that adding one character is needed.
    memo.set(i, memo.get(i - 1) + 1 || 1)

    for (let j = i - 1; j >= 0; j--) {
      // Extract the substring from j to i.
      const substring = s.substring(j, i)
      // Check if the substring exists in the dictionary.
      if (dict.has(substring)) {
        // If it exists, update dp[i] with the minimum value between the current dp[i]
        // and dp[j], which means the minimum extra characters needed.
        memo.set(i, Math.min(memo.get(i), Math.min(memo.get(j) || 0)))
      }
    }
  }

  // Return the minimum extra characters needed for the entire string s.
  return memo.get(n)
}
