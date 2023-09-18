// Precomputation, sliding window
// Time O(n) || Space O(1)
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

const maxProfit = function (prices) {
  let maxProfit = 0
  let min = prices[0]

  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i])
    maxProfit = Math.max(maxProfit, prices[i] - min)
  }

  return maxProfit
}
