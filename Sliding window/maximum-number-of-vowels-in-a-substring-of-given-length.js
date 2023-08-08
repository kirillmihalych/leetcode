// Brute force, sliding window
// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/

var maxVowels = function (s, k) {
  const vowels = ['a', 'e', 'i', 'o', 'u']

  let maxVowelsCount = 0

  let l = 0
  let r = l + k - 1

  while (r <= s.length) {
    let vowelsCount = 0

    for (let i = l; i <= r; i++) {
      if (vowels.includes(s[i])) vowelsCount++
    }

    maxVowelsCount = Math.max(maxVowelsCount, vowelsCount)

    l++
    r++
  }

  return maxVowelsCount
}

// 1 Loop
// Time O(n) || Space O(1)
var maxVowels = function (s, k) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let maxVowelsCount = 0
  let vowelsCount = 0

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) vowelsCount++

    if (i >= k && vowels.includes(s[i - k])) vowelsCount--

    if (vowelsCount === k) return k

    if (maxVowelsCount < vowelsCount) maxVowelsCount = vowelsCount
  }

  return maxVowelsCount
}
