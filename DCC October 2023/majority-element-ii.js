// hash map counting
// Time O(n) || Space O(n)
// https://leetcode.com/problems/majority-element-ii/

const majorityElement = function (nums) {
  const n = nums.length
  const time = n / 3
  const map = getMap(nums)
  const res = []

  for (let [num, count] of map) {
    if (count > time) res.push(num)
  }

  return res
}

const getMap = (nums, map = new Map()) => {
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.get(nums[i]) + 1 || 1)
  }
  return map
}
