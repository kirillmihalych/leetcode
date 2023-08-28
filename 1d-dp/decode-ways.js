// dp memo
// Time ?? || Space ??
// https://leetcode.com/problems/decode-ways/
var numDecodings = function (s) {
  if (s.length < 1) return 0
  let memo = []

  const dfs = (index) => {
    let result = 0
    if (index === s.length) return 1
    if (memo[index] != null) return memo[index]
    let [num, nextNum] = [s[index], s[index + 1]]

    if (num > 0) {
      result += dfs(index + 1)
    }

    if (num != 0 && s[index + 1] != null && num + nextNum < 27) {
      result += dfs(index + 2)
    }

    memo[index] = result
    return result
  }

  return dfs(0)
}
