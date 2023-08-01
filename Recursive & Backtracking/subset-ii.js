// dfs, but backtracking is hard part.
// Time ?? || Space ??
// https://leetcode.com/problems/subsets-ii
var subsetsWithDup = function (nums) {
  const result = []
  nums.sort((a, b) => a - b)

  const dfs = (i, nums, slate) => {
    //  base case
    if (i === nums.length) {
      result.push(slate.slice())
      return
    }
    //  recursive
    dfs(i + 1, nums, slate)

    slate.push(nums[i])
    dfs(i + 1, nums, slate)
    slate.pop()
  }

  dfs(0, nums, [])

  const hash = new Map()
  for (const el of result) {
    if (hash.has(el.toString())) continue
    hash.set(el.toString(), el)
  }

  return [...hash.values()]
}
