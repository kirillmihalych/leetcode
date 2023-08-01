// dfs, use neetcode code structure
// https://leetcode.com/problems/combinations/

var combine = function (n, k) {
  let nums = []

  for (let i = 1; i <= n; i++) {
    nums.push(i)
  }

  return dfs(k, nums)
}

const dfs = (k, nums, level = 0, set = [], subset = []) => {
  // base case ???
  if (set.length === k) subset.push(set.slice())

  for (let i = level; i < nums.length; i++) {
    backTrack(k, nums, i, set, subset)
  }

  return subset
}

const backTrack = (k, nums, i, set, subset) => {
  set.push(nums[i])
  dfs(k, nums, i + 1, set, subset)
  set.pop()
}
