// dfs, use for loop and check for diplicates
// Time ?? || Space ??
// https://leetcode.com/problems/permutations/

var permute = function (nums) {
  nums.sort((a, b) => a - b)

  return dfs(nums)
}

const dfs = (nums, permutation = [], permutations = []) => {
  const isBaseCase = permutation.length === nums.length
  if (isBaseCase) permutations.push(permutation.slice())

  for (let i = 0; i < nums.length; i++) {
    if (permutation.includes(nums[i])) continue

    backTrack(nums, i, permutation, permutations)
  }

  return permutations
}

const backTrack = (nums, i, permutation, permutations) => {
  permutation.push(nums[i])
  dfs(nums, permutation, permutations)
  permutation.pop()
}
