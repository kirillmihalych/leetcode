// dfs, but backtracking is hard part.
// Time ?? || Space ??
// https://leetcode.com/problems/subsets-ii
const subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b)

  const subres = dfs(nums)
  const hash = new Map()

  for (const el of subres) {
    if (hash.has(el.toString())) continue
    hash.set(el.toString(), el)
  }

  return [...hash.values()]
}

const dfs = (nums, level = 0, set = [], subset = []) => {
  subset.push(set.slice())

  for (let i = level; i < nums.length; i++) {
    backTrack(nums, i, set, subset)
  }

  return subset
}

const backTrack = (nums, i, set, subset) => {
  set.push(nums[i])
  dfs(nums, i + 1, set, subset)
  set.pop()
}
