//leetcode.com/problems/two-sum/

https: var twoSum = function (nums, target) {
  const res = []

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]

    // j should not be equal to i,
    // in purpose to avoid duplicates
    for (let j = i + 1; j < nums.length; j++) {
      if (complement === nums[j]) res.push(i, j)
    }
  }

  return res
}
