// Set solution
// https://leetcode.com/problems/contains-duplicate/

var containsDuplicate = function (nums) {
  // create set of unique numbers from our array of nums
  // so if set size less than nums length,
  // it means that duplicate was contained.

  const set = new Set(nums)
  return set.size < nums.length ? true : false
}
