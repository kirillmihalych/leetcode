// dp memo top-down
// Time O(n) || Space O(n)
// https://leetcode.com/problems/coin-change/

const coinChange = function (coins, amount) {
  let memo = new Map()

  const recursive = (amount) => {
    if (memo.has(amount)) return memo.get(amount)
    const isBaseCase1 = amount === 0
    if (isBaseCase1) return 0

    const isBaseCase2 = amount < 0
    if (isBaseCase2) return Infinity

    let result = Infinity

    for (let coin of coins) {
      if (amount >= 0) result = Math.min(result, recursive(amount - coin))
    }

    memo.set(amount, result + 1)
    return memo.get(amount)
  }

  let fewest_number = recursive(amount)

  return fewest_number === Infinity ? -1 : fewest_number
}
