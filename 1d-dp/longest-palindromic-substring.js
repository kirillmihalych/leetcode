// Expand around center
// Time O(n^2)|| Space O(n)
// https://leetcode.com/problems/longest-palindromic-substring/

const longestPalindrome = function (s) {
  let longest = ''

  for (let i = 0; i < s.length; i++) {
    const odd = getDrome(s, i, i)
    const even = getDrome(s, i, i + 1)

    const bigger = odd.length > even.length ? odd : even
    if (bigger.length > longest.length) longest = bigger
  }

  return longest
}

const getDrome = (s, i, j) => {
  while (i >= 0 && j <= s.length - 1 && s[i] === s[j]) {
    i--
    j++
  }

  return s.slice(i + 1, j)
}

// WRONG SOLUTION || FAILED ATTEMPT

var longestPalindrome2 = function (s) {
  let set = new Set(s)
  if (set.size === 1) return s

  let palindrome = [0, 0]
  let temp = [0, 0]
  let l = 0
  let r = s.length - 1
  if (s.length > 4) r = 4

  let mid = Math.floor((l + r) / 2)
  let isOdd = s.length % 2 !== 0
  if (s.length <= 4) {
    temp = getPalindrome2(s, mid, isOdd)
    if (temp[1] - temp[0] > palindrome[1] - palindrome[0]) {
      palindrome = [temp[0], temp[1]]
    }
    console.log('hello there', palindrome)
  } else {
    while (r < s.length) {
      mid = Math.floor((l + r) / 2)
      isOdd = (l + (r + 1)) % 2 !== 0
      temp = getPalindrome2(s, mid, isOdd)
      if (temp[1] - temp[0] > palindrome[1] - palindrome[0]) {
        palindrome = [temp[0], temp[1]]
      }
      l++
      r++
    }
  }

  return s.slice(palindrome[0], palindrome[1] + 1)
}

const getPalindrome2 = (s, mid, isOdd) => {
  let palindrome = [mid, mid]
  let left = 0
  let right = s.length - 1

  // isEven
  if (!isOdd) {
    if (s[mid] === s[mid + 1]) {
      left = mid
      right = mid + 1
      palindrome = [left, right]
    } else if (s[mid] === s[mid - 1]) {
      left = mid - 1
      right = mid
      palindrome = [left, right]
    } else if (mid - 1 >= 0 && mid - 2 >= 0 && s[mid - 1] === s[mid - 1 - 1]) {
      left = mid - 1 - 1
      right = mid - 1
      palindrome = [left, right]
    } else if (
      mid - 1 >= 0 &&
      mid + 1 <= s.length - 1 &&
      s[mid - 1] === s[mid + 1]
    ) {
      left = mid - 1
      right = mid + 1
      palindrome = [left, right]
    } else if (
      mid + 1 - 1 >= 0 &&
      mid + 1 + 1 <= s.length - 1 &&
      s[mid + 1 - 1] === s[mid + 1 + 1]
    ) {
      left = mid + 1 - 1
      right = mid + 1 + 1
      palindrome = [left, right]
    } else if (
      mid - 1 - 1 >= 0 &&
      mid - 1 + 1 <= s.length - 1 &&
      s[mid - 1 - 1] === s[mid - 1 + 1]
    ) {
      left = mid - 1 - 1
      right = mid - 1 + 1
      palindrome = [left, right]
    } else {
      return palindrome
    }
  }

  // isOdd
  if (isOdd) {
    if (mid - 1 >= 0 && mid + 1 <= s.length - 1 && s[mid - 1] === s[mid + 1]) {
      left = mid - 1
      right = mid + 1
      palindrome = [left, right]
    } else if (s[mid] === s[mid + 1]) {
      console.log('mid + 1')
      left = mid
      right = mid + 1
      palindrome = [left, right]
    } else if (s[mid] === s[mid - 1]) {
      console.log('mid - 1 + 1')
      left = mid - 1
      right = mid
      palindrome = [left, right]
    } else if (
      mid - 1 >= 0 &&
      mid - 1 - 1 >= 0 &&
      s[mid - 1] === s[mid - 1 - 1]
    ) {
      left = mid - 1 - 1
      right = mid - 1
      palindrome = [left, right]
    } else if (
      mid + 1 - 1 >= 0 &&
      mid + 1 + 1 <= s.length - 1 &&
      s[mid + 1 - 1] === s[mid + 1 + 1]
    ) {
      left = mid + 1 - 1
      right = mid + 1 + 1
      palindrome = [left, right]
    } else if (
      mid - 1 - 1 >= 0 &&
      mid - 1 + 1 <= s.length - 1 &&
      s[mid - 1 - 1] === s[mid - 1 + 1]
    ) {
      left = mid - 1 - 1
      right = mid - 1 + 1
      palindrome = [left, right]
    } else {
      return palindrome
    }
  }

  while (left >= 0 && right <= s.length - 1) {
    const isPalindrome = s[left] === s[right]

    if (isPalindrome) {
      palindrome = [left, right]
      console.log(left, right)
      left = left - 1
      right = right + 1
    } else {
      return palindrome
    }
  }

  return palindrome
}
