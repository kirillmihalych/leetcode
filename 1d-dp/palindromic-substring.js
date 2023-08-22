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

// Expand around center
// Time O(N ^ 2) || Space ??
// https://leetcode.com/problems/palindromic-substrings

const countSubstringsTwo = function (s) {
  let count = 0
  for (let i = 0; i < s.length; i++) {
    // around one char
    let amount1 = getPalindromeCount(s, i, i)
    // around two chars
    let amount2 = getPalindromeCount(s, i, i + 1)
    count = count + amount1 + amount2
  }

  return count
}

const getPalindromeCount = (str, i, j, count = 0) => {
  while (i >= 0 && j <= str.length - 1 && str[i] === str[j]) {
    count++
    i -= 1
    j += 1
  }

  return count
}
