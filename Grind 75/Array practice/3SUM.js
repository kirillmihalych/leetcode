// Two pointers
// Time O(N^2) || Space O(n)
// https://leetcode.com/problems/3sum/

const threeSum = function (nums) {
  const target = 0
  const res = []
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    let k = nums.length - 1
    let j = i + 1

    // if it is duplicates, then continue
    if (i > 0 && nums[i] === nums[i - 1]) continue

    while (j < k) {
      let threeSum = nums[i] + nums[j] + nums[k]
      const isTarget = threeSum === target

      if (threeSum < target) {
        j++
      } else if (threeSum > target) {
        k--
      } else {
        res.push([nums[i], nums[j], nums[k]])
        while (nums[j] === nums[j + 1]) j++
        while (nums[k] === nums[k - 1]) k--
        j++
        k--
      }
    }
  }

  return res
}
