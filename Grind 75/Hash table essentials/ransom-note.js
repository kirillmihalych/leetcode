// Hash
// Time O(n) || Space O(n)
// https://leetcode.com/problems/ransom-note/

const canConstruct = function (ransomNote, magazine) {
  const noteMap = getMap(ransomNote)
  const magazineMap = getMap(magazine)

  for (const [key, value] of noteMap) {
    if (!(magazineMap.has(key) && magazineMap.get(key) >= value)) return false
  }

  return true
}

const getMap = (str, map = new Map()) => {
  for (let i = 0; i < str.length; i++) {
    map.set(str[i], map.get(str[i]) + 1 || 1)
  }
  return map
}
