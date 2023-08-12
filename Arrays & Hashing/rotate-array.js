// arr
// Time O(n) || Space O(n)
// https://leetcode.com/problems/rotate-array/
const rotate = function (nums, k) {
  let result = [...nums]

  for (let i = 0; i < nums.length; i++) {
    let idx = (i + k) % nums.length

    nums[idx] = result[i]
  }
}
