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

// Brute force
var isPalindrome = function (s) {
  if (!s.length) return true

  const alphaNumeric = filterAlphaNumeric(s)
  const reversed = reverse(alphaNumeric)

  return alphaNumeric === reversed
}

const filterAlphaNumeric = (
  str,
  nonAlphaNumeric = new RegExp('[^a-z0-9]', 'gi')
) => str.toLowerCase().replace(nonAlphaNumeric, '')

const reverse = (str) => str.split('').reverse().join('')
