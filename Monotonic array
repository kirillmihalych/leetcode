// * Brute Force - Linear Search
// * Time O(N^2) | Space O(1) ПОСЧИТАТЬ!!!
// * https://leetcode.com/problems/monotonic-array/

var isMonotonic = function (nums) {
  // Set two flags, that are identifying array's direction
  let goingUp = false
  let goingDown = false

  // Iterate through array in purpose to detect,
  // if direction was changed
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] > nums[i]) goingUp = true
    if (nums[i + 1] < nums[i]) goingDown = true
  }

  // if array's direction was changed in both ways,
  // it means that array in not monotonic.
  // otherwise, array is monotonic
  return goingUp && goingDown ? false : true
}
