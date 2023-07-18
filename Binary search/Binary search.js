// Binary search
// https://leetcode.com/problems/binary-search/

const search = function (nums, target) {
  let l = 0
  let r = nums.length - 1

  while (l <= r) {
    let m = Math.round((l + r) / 2)
    // if(m < 1) m = 1;

    if (nums[m] > target) r = m - 1
    if (nums[m] < target) l = m + 1
    if (nums[m] === target) return m
  }

  return -1
}
