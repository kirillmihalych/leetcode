// Sliding windows
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// Time O(n) || Space O(n)
var maxProfit = function (prices) {
  let [l, r, maxProfit] = [0, 1, 0]

  let buy = prices[0]
  while (r < prices.length) {
    buy = Math.min(buy, prices[l])
    let sell = prices[r]
    maxProfit = Math.max(maxProfit, sell - buy)
    l++
    r++
  }

  return maxProfit
}
