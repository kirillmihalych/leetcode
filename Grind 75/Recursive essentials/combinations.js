// Recursive
// Time O(2 ^ n) || Space O(n)
// https://leetcode.com/problems/combinations/

const combine = function (n, k) {
  const nums = []

  for (let i = 1; i <= n; i++) {
    nums.push(i)
  }

  const result = []

  const recursive = (index, nums, slate) => {
    const isBaseCase = slate.length === k
    if (isBaseCase) {
      result.push(slate.slice())
    }

    for (let i = index; i < nums.length; i++) {
      slate.push(nums[i])
      recursive(i + 1, nums, slate)
      slate.pop()
    }

    return result
  }

  return recursive(0, nums, [])
}
