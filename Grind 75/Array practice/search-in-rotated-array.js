// Binary search
// Time O(log N) || Space O(1)
// https://leetcode.com/problems/search-in-rotated-sorted-array/

const search = function (nums, target) {
  if (nums.length === 0) return -1

  let l = 0
  let r = nums.length - 1

  while (l <= r) {
    let mid = Math.floor((l + r) / 2)
    let [leftNum, rightNum] = [nums[l], nums[r]]

    if (nums[mid] === target) return mid

    // left arr
    if (leftNum <= nums[mid]) {
      // check if target there, if target in rage from left num to mid
      if (target < nums[mid] && leftNum <= target) {
        r = mid - 1
      } else {
        l = mid + 1
      }
      // right arr
    } else {
      // check if target there, if target in range from mid to right num
      if (nums[mid] < target && target <= rightNum) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    }
  }

  return -1
}
