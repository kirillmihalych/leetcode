// array approach
// Time O(n) || Space O(n)
// leetcode.com/problems/merge-strings-alternately/

var mergeAlternately = function (word1, word2) {
  let res = []

  for (let i = 0; i < word1.length; i++) {
    res.push(word1[i])
    res.push(word2[i])
  }

  if (word1.length < word2.length) {
    res = [...res, word2.slice(word1.length)]
  }

  if (word2.lengt > word1.length) {
    res = [...res, word1.slice(word2.length)]
  }

  return res.join('')
}
