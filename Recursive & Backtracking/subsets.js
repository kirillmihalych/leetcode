// dfs, think about call stacks
// Time ??? || Space ??
// https://leetcode.com/problems/subsets/

var subsets = function (nums) {
  const result = []

  const dfs = (i, nums, slate) => {
    // base case
    if (i === nums.length) {
      result.push(slate.slice())
      return
    }

    // recursive case
    // include
    dfs(i + 1, nums, slate)

    // exclude
    // backtrack
    slate.push(nums[i])
    dfs(i + 1, nums, slate)
    slate.pop()
  }

  dfs(0, nums, [])
  return result
}
