// dp
// https://leetcode.com/problems/maximum-product-subarray/
// Time ?? || Space ??

https: var maxProduct = function (nums) {
  let prevMax = nums[0]
  let prevMin = nums[0]
  let result = nums[0]

  for (let i = 1; i < nums.length; i++) {
    let currMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin)
    let currMin = Math.min(nums[i] * prevMin, nums[i], nums[i] * prevMax)

    console.log(nums[i], currMax, currMin)
    prevMax = currMax
    prevMin = currMin

    result = Math.max(result, currMax)
  }

  return result
}
