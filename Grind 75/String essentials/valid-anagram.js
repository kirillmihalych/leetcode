// Counting chars, anagram
// Time O(n) || Space O(n)
// https://leetcode.com/problems/valid-anagram/

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  const sHashMap = getHashMap(s)
  const tHashMap = getHashMap(t)

  for (const char of s) {
    let sChar = sHashMap.get(char)
    let tChar = tHashMap.get(char)

    if (sChar !== tChar) return false
  }

  return true
}

const getHashMap = (str, hash = new Map()) => {
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    hash.set(char, hash.get(char) + 1 || 1)
  }

  return hash
}
