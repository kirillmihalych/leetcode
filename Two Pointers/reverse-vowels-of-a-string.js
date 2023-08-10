// Use two pointers
// Time O(n) || Space O(n)
// https://leetcode.com/problems/reverse-vowels-of-a-string/
var reverseVowels = function (s) {
  const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
  let l = 0
  let r = s.length - 1
  let str = s.split('')

  while (l < r) {
    const [leftChar, rightChar] = [str[l], str[r]]

    const isLeftVowel = vowels.includes(leftChar)
    if (!isLeftVowel) l++

    const isRightVowel = vowels.includes(rightChar)
    if (!isRightVowel) r--

    const isTarget = isLeftVowel && isRightVowel
    if (isTarget) {
      ;[str[l], str[r]] = [str[r], str[l]]
      l++
      r--
    }
  }

  return str.join('')
}

// Brute force
var reverseVowels = function (s) {
  const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
  let tempArr = []

  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (vowels.includes(char)) tempArr.unshift(char)
  }

  let arr = s.split('')

  for (let j = 0; j < s.length; j++) {
    let char = s[j]
    if (vowels.includes(char)) {
      console.log(char)
      arr.splice(j, 1, tempArr[0])
      tempArr.shift()
    }
  }

  return arr.join('')
}
