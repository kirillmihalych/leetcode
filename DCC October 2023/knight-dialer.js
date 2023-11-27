var knightDialer = function (n) {
  const MOD = 10 ** 9 + 7
  let dp = new Array(10).fill(1)
  const map = {
    0: [4, 6],
    1: [6, 8],
    2: [7, 9],
    3: [4, 8],
    4: [0, 3, 9],
    6: [0, 1, 7],
    7: [2, 6],
    8: [1, 3],
    9: [2, 4],
  }

  for (let i = 2; i <= n; i++) {
    const temp = new Array(10).fill(0)
    for (const key in map) {
      for (const val of map[key]) {
        temp[key] = (temp[key] + dp[val]) % MOD
      }
    }
    dp = temp
  }

  return dp.reduce((acc, curr) => (acc + curr) % MOD, 0)
}
