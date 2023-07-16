// Brute force
// Time O(n^2)
// https://leetcode.com/problems/contains-duplicate-ii/

var containsNearbyDuplicate = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      if (num === nums[j] && Math.abs(i - j) <= k) {
        return true
      }
    }
  }
  return false
}
// Hash map
// Time 0(n)
var containsNearbyDuplicate = function (nums, k) {
  const hashMap = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (hashMap.has(nums[i]) && i - hashMap.get(nums[i]) <= k) return true
    hashMap.set(nums[i], i)
  }

  return false
}
