// hash
// Time O(n) || Space O(n)
// https://leetcode.com/problems/two-sum/

const twoSum = function (nums, target) {
  const result = []
  const map = getMap(nums)

  for (let i = 0; i < nums.length; i++) {
    const key = target - nums[i]

    if (map.has(key) && map.get(key) !== i) {
      result.push(map.get(key), i)
      return result
    }
  }
}

const getMap = (nums, map = new Map()) => {
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i)
  }

  return map
}
