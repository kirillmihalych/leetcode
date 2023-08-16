// xor
// Time O(n) || Space O(n)
// https://leetcode.com/problems/single-number/

var singleNumber = function (nums) {
  let xor = 0
  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i]
    xor = xor ^ curr
  }
  return xor
}
