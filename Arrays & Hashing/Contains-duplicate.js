// Set solution
// Time O(n) || Space O(n)
// https://leetcode.com/problems/contains-duplicate/

var containsDuplicate = function (nums) {
  // create set of unique numbers from our array of nums
  // so if set size less than nums length,
  // it means that duplicate was contained.

  const set = new Set(nums)
  return set.size < nums.length ? true : false
}

// Brute force
// Time O(N^2) | Space O(1)
var containsDuplicate = (nums) => {
  for (let right = 0; right < nums.length; right++) {
    for (let left = 0; left < right; left++) {
      const isDuplicate = nums[left] === nums[right]
      if (isDuplicate) return true
    }
  }

  return false
}

// Set - Early exit
// Time O(n) || Space O(n)
const containsDuplicate = (nums, setOfNums = new Set()) => {
  for (const num of nums) {
    if (setOfNums.has(num)) return true
    setOfNums.add(num)
  }

  return false
}
