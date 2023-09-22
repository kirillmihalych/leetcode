// Two pointers
// Time O(n) || Space O(n)
// https://leetcode.com/problems/is-subsequence/

const isSubsequence = function (s, t) {
  let j = 0
  let count = 0

  for (let i = 0; i < t.length; i++) {
    if (s[j] === t[i]) {
      count++
      j++
    }
  }

  return count === s.length
}
