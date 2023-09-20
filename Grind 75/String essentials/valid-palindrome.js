// Palindrome, two pointers
// Time O(n) || Space O(n)
// https://leetcode.com/problems/valid-palindrome/

var isPalindrome = function (s) {
  const filtered = filterStr(s)
  let j = filtered.length - 1
  let i = 0

  while (filtered[i] === filtered[j] && i <= j) {
    j--
    i++

    if (i >= j && filtered[i] == filtered[j]) return true
  }

  if (filtered.length === 0) return true
  return false
}

const filterStr = (str, nonAlphaNumeric = new RegExp('[^a-z0-9]', 'gi')) =>
  str.replace(nonAlphaNumeric, '').toLowerCase()
