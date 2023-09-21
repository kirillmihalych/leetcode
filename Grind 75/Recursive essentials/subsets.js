// Recursive dfs
// Time O(2 ^ N) || Space O(n ??)
// https://leetcode.com/problems/subsets/submissions/

const subsets = function (nums) {
  let result = []

  const recursive = (index, nums, slate) => {
    result.push(slate.slice())

    for (let i = index; i < nums.length; i++) {
      slate.push(nums[i])
      recursive(i + 1, nums, slate)
      slate.pop()
    }

    return result
  }

  return recursive(0, nums, [])
}
