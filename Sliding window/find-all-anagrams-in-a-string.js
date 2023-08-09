// Sliding window
// Time O(n) || Space O(n)
// https://leetcode.com/problems/find-all-anagrams-in-a-string/
var findAnagrams = function (s, p) {
  let charMap = new Map()
  let matches = 0
  let matchIdx = []

  for (let i = 0; i < p.length; i++) {
    charMap.set(p[i], charMap.get(p[i]) + 1 || 1)
  }

  let leftWindow = 0
  for (let rightWindow = 0; rightWindow < s.length; rightWindow++) {
    let rightChar = s[rightWindow]
    if (charMap.has(s[rightWindow])) {
      const rightCharCount = charMap.get(rightChar)
      charMap.set(rightChar, rightCharCount - 1)
      if (charMap.get(rightChar) === 0) {
        matches++
      }
    }

    if (rightWindow >= p.length) {
      const leftChar = s[leftWindow]
      if (charMap.has(leftChar)) {
        const leftCharCount = charMap.get(leftChar)
        charMap.set(leftChar, leftCharCount + 1)
        if (leftCharCount === 0) {
          matches--
        }
      }
      leftWindow++
    }

    if (matches === charMap.size) {
      matchIdx.push(leftWindow)
    }
  }

  return matchIdx
}
