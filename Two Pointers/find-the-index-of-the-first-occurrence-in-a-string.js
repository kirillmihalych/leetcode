// edge neeedle pattern, should check every edge
// Time O(n * m) || Space ???
// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

var strStr = function (haystack, needle) {
  let edge = needle[0]
  let temp = ''

  for (let i = 0; i < haystack.length; i++) {
    let char = haystack[i]
    if (char !== edge) {
      continue
    } else {
      let l = i
      let r = 0
      while (haystack[l] === needle[r] && r < needle.length) {
        temp += haystack[l]
        if (temp === needle) return i
        l++
        r++
      }
      temp = ''
    }
  }

  return -1
}
