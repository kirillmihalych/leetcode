// Bits
// Time O(n) || Space O(1)
// https://leetcode.com/problems/missing-number/

var missingNumber = function (nums, missingNumber = nums.length) {
  for (let i = 0; i < nums.length; i++) {
    const xor = i ^ nums[i]

    missingNumber ^= xor
  }

  return missingNumber
}
