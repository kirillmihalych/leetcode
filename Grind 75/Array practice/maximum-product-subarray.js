// Precomputation
// Time O(n) || Space O(n)
// https://leetcode.com/problems/maximum-product-subarray/

const maxProduct = function (nums) {
  let max = nums[0]
  let min = nums[0]
  let product = nums[0]

  for (let i = 1; i < nums.length; i++) {
    let options = [nums[i] * max, nums[i] * min, nums[i]]
    max = Math.max(...options)
    min = Math.min(...options)

    product = Math.max(product, max)
  }

  return product
}
