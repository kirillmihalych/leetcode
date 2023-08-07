// что-то там в хаш мап записывал, хоп-хоп и получилось
// Time O(n) || Space O(n)
// https://leetcode.com/problems/min-cost-climbing-stairs/submissions/
const minCostClimbingStairs = (cost, index = cost.length, memo = new Map()) => {
  const isBaseCase = index <= 1
  if (isBaseCase) return 0

  if (memo.has(index)) return memo.get(index)

  const [prev, prevPrev] = [index - 1, index - 2]
  const left = minCostClimbingStairs(cost, prev, memo) + cost[prev]
  const right = minCostClimbingStairs(cost, prevPrev, memo) + cost[prevPrev]

  memo.set(index, Math.min(left, right))
  return memo.get(index)
}
