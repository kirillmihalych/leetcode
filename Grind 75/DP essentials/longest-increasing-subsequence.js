// dp memo
// Time O(n ^ 2) || Space O(n)
// https://leetcode.com/problems/longest-increasing-subsequence/

function lengthOfLIS(nums) {
  if (!nums.length) return 0

  let n = nums.length - 1

  let memo = new Map()

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        memo.set(i, Math.max(memo.get(i) || 1, memo.get(j) + 1 || 1 + 1))
      }
    }
  }

  let res = Math.max(...[...memo.values()])
  return res > 0 ? res : 1
}
