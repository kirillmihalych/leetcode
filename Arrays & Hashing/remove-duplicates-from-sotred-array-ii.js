// REMOVE DUPLICATES!!!
// Time O(n) || Space O(n)
// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
var removeDuplicates = function (nums) {
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) count++

    if (nums[i] !== nums[i + 1] && count > 0) count = 0

    if (nums[i] === nums[i + 1] && count === 2) {
      while (nums[i] === nums[i + 1]) nums.splice(i, 1)
      count = 0
    }
  }
}
