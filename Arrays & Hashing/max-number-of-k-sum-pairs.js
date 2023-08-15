// Two pointers
// Time O(n) || Space O(1)
// https://leetcode.com/problems/max-number-of-k-sum-pairs/

var maxOperations = function (nums, k) {
  nums.sort((a, b) => a - b)

  let count = 0
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    let [leftNum, rightNum] = [nums[left], nums[right]]
    let sum = leftNum + rightNum

    const isTarget = sum === k
    if (isTarget) {
      count++
      left++
      right--
    }

    const isLess = sum < k
    if (isLess) left++

    const isGreater = sum > k
    if (isGreater) right--
  }

  return count
}
