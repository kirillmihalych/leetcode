// Binary search
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
// Time O(log(n))

var findMin = function (nums) {
  let [left, right] = [0, nums.length - 1]

  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    let guess = nums[mid]
    let [leftNum, rightNum] = [nums[left], nums[right]]

    const isTarget = leftNum < rightNum
    if (isTarget) return leftNum

    const isTargetGreater = guess >= leftNum
    if (isTargetGreater) left = mid + 1

    const isTargetLess = guess < leftNum
    if (isTargetLess) right = mid
  }

  return nums[left]
}
