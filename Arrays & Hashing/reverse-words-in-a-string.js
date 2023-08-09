// Array approach
// Time O(n) || Space O(n)
// https://leetcode.com/problems/reverse-words-in-a-string/
var reverseWords = function (s) {
  let arr = s.split(' ')
  let res = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '') res.push(arr[i])
  }

  return res.reverse().join(' ')
}
