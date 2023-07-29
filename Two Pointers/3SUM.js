// 2 Pointer
// Time O(???)
// https://leetcode.com/problems/3sum/
var threeSum = function (nums, target = 0) {
  let result = []
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    let k = nums.length - 1
    let j = i + 1

    if (i > 0 && nums[i] === nums[i - 1]) continue
    while (j < k) {
      let threeSum = nums[i] + nums[j] + nums[k]
      const isTarget = threeSum === target

      if (threeSum < target) {
        j++
      } else if (threeSum > target) {
        k--
      } else {
        result.push([nums[i], nums[j], nums[k]])
        while (nums[j] === nums[j + 1]) j++
        while (nums[k] === nums[k - 1]) k--
        j++
        k--
      }
    }
  }

  return result
}
