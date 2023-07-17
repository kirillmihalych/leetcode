// 2 Pointer
// https://leetcode.com/problems/3sum/
const threeSum = function (nums) {
  const res = []
  const target = 0
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (i > 0 && num === nums[i - 1]) continue

    let j = i + 1
    let k = nums.length - 1

    while (j < k) {
      let threeSum = num + nums[j] + nums[k]

      if (threeSum > target) {
        k--
      } else if (threeSum < target) {
        j++
      } else {
        res.push([num, nums[j], nums[k]])
        j++
        k--
        while (nums[j] === nums[j - 1] && j < k) j++
      }
    }
  }

  return res
}
