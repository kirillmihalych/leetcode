//
// Time O(n) || Space O(1)
// https://leetcode.com/problems/product-of-array-except-self/

const productExceptSelf = function (nums) {
  const result = []
  let multiplier = 1

  for (let i = 0; i < nums.length; i++) {
    result[i] = multiplier
    multiplier *= nums[i]
  }

  multiplier = 1

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= multiplier
    multiplier *= nums[i]
  }

  return result
}
