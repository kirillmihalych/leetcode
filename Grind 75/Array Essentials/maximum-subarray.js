// Precomputation
// Time O(n) || Space O(1)
// https://leetcode.com/problems/maximum-subarray/
const maxSubArray = function (nums) {
  let min = 0
  let max = -Infinity

  for (let i = 0; i < nums.length; i++) {
    min = Math.max(min + nums[i], nums[i])
    max = Math.max(max, min)
  }

  return max
}
