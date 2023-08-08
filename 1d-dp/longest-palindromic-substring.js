// ???
// Time O(n^2)|| Space O(n)
// https://leetcode.com/problems/longest-palindromic-substring/
const getDrome = (left, right, str) => {
  while (left >= 0 && right <= str.length) {
    if (str[left] !== str[right]) break
    left--
    right++
  }

  return [left + 1, right]
}

const longestPalindrome = function (s) {
  let max = [0, 1]

  for (let i = 0; i < s.length; i++) {
    const even = getDrome(i - 1, i, s)
    const odd = getDrome(i - 1, i + 1, s)
    const currMax = even[1] - even[0] > odd[1] - odd[0] ? even : odd

    max = max[1] - max[0] > currMax[1] - currMax[0] ? max : currMax
  }

  return s.slice(max[0], max[1])
}
