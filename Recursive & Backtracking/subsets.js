// dfs, think about call stacks
// Time ??? || Space ??
// https://leetcode.com/problems/subsets/

const subsets = function (nums) {
  return dfs(nums)
}

const dfs = (nums, level = 0, set = [], subset = []) => {
  // base case
  subset.push(set.slice())

  for (let i = level; i < nums.length; i++) {
    backTrack(i, nums, set, subset)
  }

  return subset
}

const backTrack = (i, nums, set, subset) => {
  set.push(nums[i])
  dfs(nums, i + 1, set, subset)
  set.pop()
}
