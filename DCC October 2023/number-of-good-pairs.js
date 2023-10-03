// hash map counting
// Time O(n) || Space O(n)
// https://leetcode.com/problems/number-of-good-pairs

const numIdenticalPairs = function (nums, map = new Map()) {
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    let key = nums[i]
    if (map.has(key)) {
      count = count + map.get(key)
      map.set(key, map.get(key) + 1)
    } else {
      map.set(key, 1)
    }
  }

  return count
}
