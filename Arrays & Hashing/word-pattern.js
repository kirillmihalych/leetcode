// Hash map
// Time O(n) || Space O(n)
// https://leetcode.com/problems/word-pattern/
const wordPattern = function (pattern, s) {
  let hash = new Map()
  let arr = s.split(' ')

  if (pattern.length !== arr.length) return false
  if ([...new Set(pattern)].length !== [...new Set(arr)].length) return false

  for (let i = 0; i < pattern.length; i++) {
    hash.set(pattern[i], arr[i])
  }

  for (let j = 0; j < pattern.length; j++) {
    let char = pattern[j]
    if (hash.get(char) !== arr[j]) return false
  }

  return true
}
