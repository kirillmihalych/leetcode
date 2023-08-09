// Brute force
// Time ?? || Space ??
// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/

var longestSubarray = function (nums) {
  let start = 0
  let longest = 0
  let flip = 1
  let count = 0
  let wasNotChanged = true

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]

    if (num === 0 && flip === 1) {
      wasNotChanged = false
      flip = 0
    } else if (num === 1) {
      count++
    } else {
      longest = Math.max(longest, count)
      count = 0
      i = start
      start++
      flip = 1
    }
  }

  longest = Math.max(longest, count)
  if (wasNotChanged) longest = longest - 1
  return longest
}
