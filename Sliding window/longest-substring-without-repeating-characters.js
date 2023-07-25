// use set & sliding window
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Time O(n) || Space O(n)

var lengthOfLongestSubstring = function (s) {
  let set = new Set()
  let l = 0
  let max = 0

  for (let r = 0; r < s.length; r++) {
    while (set.has(s[r])) {
      set.delete(s[l])
      l++
    }
    set.add(s[r])
    max = Math.max(max, set.size)
  }

  return max
}

// Brute force intuitive
var lengthOfLongestSubstring = function (s) {
  let [l, r] = [0, 1]
  let longest = ''
  if (s.length === 1) return s.length

  while (r <= s.length) {
    let sub = s.slice(l, r)
    const isHaveRepeats = sub.includes(s[r])
    if (isHaveRepeats) {
      if (sub.length > longest.length) longest = sub
      l += 1
      r = l + 1
    } else {
      if (sub.length > longest.length) longest = sub
      r++
    }
  }

  return longest.length
}
