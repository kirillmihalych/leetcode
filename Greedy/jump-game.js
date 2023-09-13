// Greedy
// Time O(n) || Space O(n)
// https://leetcode.com/problems/jump-game/

const canJump = function (nums) {
  let max = 0
  let i = 0
  let n = nums.length - 1

  while (i < nums.length) {
    max = Math.max(max, i + nums[i])

    if (max >= n) {
      return true
    }

    if (max <= i && nums[i] === 0) return false

    i++
  }

  return false
}
