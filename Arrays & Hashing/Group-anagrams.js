// hash map solution
// Time O(n * n log n) || Space O(n)
// https://leetcode.com/problems/group-anagrams/
var groupAnagrams = function (strs) {
  const hash = getHash(strs)
  return [...hash.values()]
}

const getHash = function (words) {
  const hash = new Map()
  const original = [...words]
  // sort words
  for (let i = 0; i < words.length; i++) {
    words[i] = redirect(words[i])
  }

  // group words
  for (let i = 0; i < words.length; i++) {
    let values = hash.get(words[i]) || []
    hash.set(words[i], [...values, original[i]])
  }

  return hash
}

const redirect = function (str) {
  return str
    .split('')
    .sort((a, b) => a.localeCompare(b) - b.localeCompare(a))
    .join('')
}
