// Binary search
// https://leetcode.com/problems/search-in-rotated-sorted-array/
// Time O(log(n))
var search = (nums, target) => {
  let [left, right] = [0, nums.length - 1]

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    let guess = nums[mid]
    let [leftNum, rightNum] = [nums[left], nums[right]]

    const isTarget = guess === target
    if (isTarget) return mid

    const isAscending = leftNum <= guess
    if (isAscending) {
      const isInRange = leftNum <= target
      const isLess = target < guess

      const isTargetGreater = !(isInRange && isLess)
      if (isTargetGreater) left = mid + 1

      const isTargetLess = isInRange && isLess
      if (isTargetLess) right = mid - 1
    }

    const isDescending = guess < leftNum
    if (isDescending) {
      const isGreater = target > guess
      const isInRange = target <= rightNum

      const isTargetGreater = isGreater && isInRange
      if (isTargetGreater) left = mid + 1

      const isTargetLess = !(isGreater && isInRange)
      if (isTargetLess) right = mid - 1
    }
  }

  return -1
}
