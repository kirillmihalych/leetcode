// Array
// Time O(N^2) || Space O(n)
// https://leetcode.com/problems/two-sum/

const twoSum = function (nums, target) {
  const result = []

  for (let i = 0; i < nums.length; i++) {
    const key = target - nums[i]

    for (let j = 0; j < nums.length; j++) {
      if (nums[j] === key && j !== i) {
        result.push(j, i)
        return result
      }
    }
  }
}
