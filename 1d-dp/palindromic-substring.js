// Expand around center
// Time O(N ^ 2) || Space O(n)
// https://leetcode.com/problems/palindromic-substrings

const countSubstrings = function (s) {
  let num = 0

  for (let i = 0; i < s.length; i++) {
    let odd = getDrome(s, i, i)
    let even = getDrome(s, i, i + 1)

    num = num + odd + even
  }

  return num
}

function getDrome(s, i, j, count = 0) {
  while (s[i] === s[j] && i >= 0 && j <= s.length - 1) {
    count++
    j++
    i--
  }

  return count
}
