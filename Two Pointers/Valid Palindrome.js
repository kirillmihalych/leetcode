// 2 Pointers
// https://leetcode.com/problems/valid-palindrome/
var isPalindrome = function (s) {
  const str = s
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .split(' ')
    .join('')
    .split('')
    .join('')
    .toLowerCase()
  let start = 0
  let end = str.length - 1

  if (str.length === 0) return true
  if (str.length === 1) return true
  if (str[start] !== str[end]) return false

  while (start < end) {
    if (str[start] !== str[end]) {
      return false
    } else {
      start++
      end--
    }
  }

  return true
}

// Array
// Time O(n) || Space O(n)

var isPalindrome = function (s) {
  const reversed_str = reverse_str(alphanumeric_str(s))
  return alphanumeric_str(s) === reversed_str
}

const alphanumeric_str = (str) => str.replace(/[^a-z0-9]/gi, '').toLowerCase()

const reverse_str = (str) => str.split('').reverse().join('')
