// Redirected
// https://leetcode.com/problems/valid-anagram/submissions/
var isAnagram = function (s, t) {
  return redirected(s) === redirected(t) ? true : false
}

const redirected = function (str) {
  return str
    .split('')
    .sort((a, b) => a.localeCompare(b) - b.localeCompare(a))
    .join('')
}

// Hash map solution

var isAnagram = function (s, t) {
  return compareWords(s, t)
}

const getMap = (word, map = new Map()) => {
  for (let index = 0; index < word.length; index++) {
    if (map.has(word[index])) continue
    let temp = 1
    for (let j = index + 1; j < word.length; j++) {
      if (word[index] === word[j]) temp += 1
    }
    map.set(word[index], temp)
  }

  return map
}

const compareWords = (s, t) => {
  const firstWordMap = getMap(s)
  const secondWordMap = getMap(t)
  if (firstWordMap.size !== secondWordMap.size) return false

  for (let index = 0; index < s.length; index++) {
    let firstKey = firstWordMap.get(s[index])
    let secondKey = secondWordMap.get(s[index])

    if (firstKey !== secondKey) return false
  }

  return true
}
