// DP - Top Down
// Hash map - Memoization
// Time O(N) | Space O(N)
// https://leetcode.com/problems/house-robber/

var rob = function (nums, i = 0, memo = new Map()) {
  const isBaseCase = i >= nums.length
  if (isBaseCase) return 0

  if (memo.has(i)) return memo.get(i)

  const [next, nextNext] = [i + 1, i + 2]
  const right = nums[i]
  const mid = rob(nums, next, memo)
  const left = rob(nums, nextNext, memo)
  const house = left + right

  memo.set(i, memo.get(i) + Math.max(house, mid) || Math.max(house, mid))
  return memo.get(i)
}
