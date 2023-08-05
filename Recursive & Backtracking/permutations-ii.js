// dfs, map counting
// Time ?? || Space ??
// https://leetcode.com/problems/permutations-ii/submissions/

var permuteUnique = function (nums) {
  let map = getHashMap(nums)

  return dfs(map, nums.length)
}

const dfs = (map, len, combination = [], combinations = []) => {
  const isBaseCase = combination.length === len
  if (isBaseCase) {
    combinations.push(combination.slice())
    return
  }

  for (const [key, value] of map) {
    if (value === 0) continue
    combination.push(key)
    map.set(key, map.get(key) - 1)
    dfs(map, len, combination, combinations)
    map.set(key, map.get(key) + 1)
    combination.pop()
  }

  return combinations
}

const getHashMap = (nums) => {
  let hashMap = new Map()

  for (let i = 0; i < nums.length; i++) {
    hashMap.set(nums[i], hashMap.get(nums[i]) + 1 || 1)
  }

  return hashMap
}
