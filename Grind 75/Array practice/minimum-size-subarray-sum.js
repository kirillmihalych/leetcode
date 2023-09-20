// Sliding window
// Time O(n) || Space O(n)
// https://leetcode.com/problems/minimum-size-subarray-sum

const minSubArrayLen = function (target, nums) {
  let minSize = Infinity
  let start = 0
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]

    while (target <= sum) {
      minSize = Math.min(minSize, i - start + 1)
      sum -= nums[start]
      start = start + 1
    }
  }

  return minSize < Infinity ? minSize : 0
}
