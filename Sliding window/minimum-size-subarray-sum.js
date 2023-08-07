// Sliding window
// Time ?? || Space ??
// https://leetcode.com/problems/minimum-size-subarray-sum/

var minSubArrayLen = function (target, nums) {
  let minLen = Number.MAX_SAFE_INTEGER
  let l = 0
  let sum = 0

  for (let r = 0; r < nums.length; r++) {
    sum += nums[r]
    while (sum >= target) {
      minLen = Math.min(minLen, r - l + 1)
      sum = sum - nums[l]
      l++
    }
  }

  return minLen === Number.MAX_SAFE_INTEGER ? 0 : minLen
}
