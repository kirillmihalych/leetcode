// dp
// Time ?? || Space ??
//leetcode.com/problems/house-robber-ii/
https: var rob = function (nums, i = 0, memo = new Map()) {
  if (nums.length === 1) return nums[0]

  const helper = (nums, i = 0, memo = new Map()) => {
    const isBaseCase = i >= nums.length
    if (isBaseCase) return 0

    if (memo.has(i)) return memo.get(i)

    const [next, nextNext] = [i + 1, i + 2]
    const oneStep = helper(nums, next, memo)
    const twoStep = helper(nums, nextNext, memo) + nums[i]

    memo.set(
      i,
      memo.get(i) + Math.max(oneStep, twoStep) || Math.max(oneStep, twoStep)
    )
    return memo.get(i)
  }

  let arr = [...nums]
  arr.splice(arr.length - 1)
  console.log(arr)
  let arr2 = [...nums]
  arr2.splice(0, 1)

  return Math.max(helper(arr, 0), helper(arr2, 0))
}
