// anagram hash counting pattern
// Time O(N + (M - N)) | Space O(1)
// https://leetcode.com/problems/permutation-in-string/
var checkInclusion = function (s1, s2) {
  let charMap = new Map()
  let matches = 0

  for (let i = 0; i < s1.length; i++) {
    charMap.set(s1[i], charMap.get(s1[i]) + 1 || 1)
  }

  let leftWindow = 0
  for (let rightWindow = 0; rightWindow < s2.length; rightWindow++) {
    let rightChar = s2[rightWindow]
    if (charMap.has(rightChar)) {
      let rightCharCount = charMap.get(rightChar)
      charMap.set(rightChar, rightCharCount - 1)
      if (charMap.get(rightChar) === 0) {
        matches++
      }
    }

    if (rightWindow >= s1.length) {
      let leftChar = s2[leftWindow]
      if (charMap.has(leftChar)) {
        let leftCharCount = charMap.get(leftChar)
        charMap.set(leftChar, leftCharCount + 1)
        if (leftCharCount === 0) {
          matches--
        }
      }
      leftWindow++
    }

    if (matches === charMap.size) {
      return true
    }
  }

  return false
}
