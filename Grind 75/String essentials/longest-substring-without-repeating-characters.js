// Counting chars using set
// Time O(n) || Space O(n)
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

const lengthOfLongestSubstring = function (s) {
  let set = new Set()
  let max = 0
  let left = 0

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left])
      left++
    }
    set.add(s[right])
    max = Math.max(max, right + 1 - left)
  }

  return max
}
