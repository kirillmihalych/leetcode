// https://leetcode.com/problems/integer-break

https: var integerBreak = function (n) {
  let res = 1
  let dp = new Array(n + 1).fill(-1)
  function dfs(num) {
    if (num === 1) return 1

    if (dp[num] !== -1) return dp[num]
    let res = num
    for (let i = 1; i <= num; i++) {
      const tmpRes = i * dfs(num - i)
      res = Math.max(tmpRes, res)
    }

    return (dp[num] = res)
  }
  for (let i = 1; i < n; i++) {
    const tmpRes = i * dfs(n - i)
    res = Math.max(tmpRes, res)
  }
  return res
}
