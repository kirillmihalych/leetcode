// Time O(n) || Space O(n)
// https://leetcode.com/problems/monotonic-array/

var isMonotonic = function (nums) {
  let down = false
  let up = false

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) up = true
    if (nums[i] > nums[i + 1]) down = true
  }

  return up && down ? false : true
}
