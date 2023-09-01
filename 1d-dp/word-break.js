// dp memo
// Time ?? || Space ??
// https://leetcode.com/problems/word-break/

var wordBreak = function (s, wordDict, memo = new Map()) {
  if (!s) return true
  if (memo.has(s)) return memo.get(s)

  for (let word of wordDict) {
    const isBaseCase = s.indexOf(word) === 0

    if (isBaseCase) {
      if (wordBreak(s.slice(word.length), wordDict, memo)) {
        memo.set(s, true)
        return true
      }
    }
  }

  memo.set(s, false)
  return false
}
