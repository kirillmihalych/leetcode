// traversing two times, hash map, can be solved with Set
// Time O(n) || Space O(n)
// https://leetcode.com/problems/contains-duplicate
const containsDuplicate = function (nums) {
  const map = getMap(nums)

  for (let num of nums) {
    if (map.has(num) && map.get(num) > 1) {
      return true
    }
  }

  return false
}

const getMap = (nums) => {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.get(nums[i]) + 1 || 1)
  }

  return map
}

// Set approach

const containsDuplicate2 = function (nums) {
  const set = new Set()

  for (const num of nums) {
    if (set.has(num)) return true
    set.add(num)
  }

  return false
}
