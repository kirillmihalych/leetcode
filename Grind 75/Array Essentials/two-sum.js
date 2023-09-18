// hash map solution
// Time O(n) || Space O(n)
// https://leetcode.com/problems/two-sum/

const twoSum = function (nums, target) {
  const result = []
  const map = getMap(nums)

  for (const num of nums) {
    const key = target - num

    if (map.has(key) && map.get(key) !== nums.indexOf(num)) {
      result.push(map.get(key), nums.indexOf(num))
      return result
    }
  }
}

const getMap = (nums) => {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i)
  }

  return map
}
