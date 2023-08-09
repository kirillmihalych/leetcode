// Time O(n^3) || Space O(1)
// Brute force
// https://leetcode.com/problems/palindromic-substrings/

const countSubstrings = (s) => {
  let count = 0

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      count += Number(isPalindrome(i, j, s))
    }
  }

  return count
}

const isPalindrome = (left, right, s) => {
  while (left < right) {
    if (s[left] !== s[right]) return false

    left++
    right--
  }

  return true
}
