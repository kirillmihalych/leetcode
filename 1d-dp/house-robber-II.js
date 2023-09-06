// dp - memo
// Time O(n * 2) || Space O(n * 2)
// https://leetcode.com/problems/house-robber-ii/

const rob = function (nums) {
  if (nums.length === 1) return nums[0]

  const recursive = (nums, i, memo = new Map()) => {
    const isBaseCase = i < 0
    if (isBaseCase) return 0

    if (memo.has(i)) return memo.get(i)

    const oneStep = recursive(nums, i - 1, memo)
    const twoSteps = recursive(nums, i - 2, memo) + nums[i]
    memo.set(
      i,
      memo.get(i) + Math.max(oneStep, twoSteps) || Math.max(oneStep, twoSteps)
    )

    return memo.get(i)
  }

  let arr = [...nums]
  arr.splice(arr.length - 1)
  let arr2 = [...nums]
  arr2.splice(0, 1)

  return Math.max(
    recursive(arr, nums.length - 2),
    recursive(arr2, nums.length - 2)
  )
}
