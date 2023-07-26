// use map for counting chars and length of str
// Time O(((N + 26) * N) * (M - N)) | Space O(1)
// https://leetcode.com/problems/longest-repeating-character-replacement/
var characterReplacement = function (s, k) {
  let res = 0
  let hash = new Map()
  let l = 0

  for (let r = 0; r < s.length; r++) {
    let len = r - l + 1

    hash.set(s[r], 1 + (hash.get(s[r]) || 0))

    if (len - Math.max(...hash.values()) > k) {
      hash.set(s[l], hash.get(s[l]) - 1)
      l++
    }

    len = r - l + 1
    res = Math.max(res, len)
  }

  return res
}
