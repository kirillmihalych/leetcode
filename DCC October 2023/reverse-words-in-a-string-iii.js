// https://leetcode.com/problems/reverse-words-in-a-string-iii/
// Time O(n) || Space O(n)

const reverseWords = function (s) {
  const words = s.split(' ')

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split('').reverse().join('')
  }

  return words.join(' ')
}
