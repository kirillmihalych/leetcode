// Brute force solution
// leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
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

// Hash map solution
const twoSum = function (nums, target) {
  const hash = getHash(nums)
  return findSum(hash, nums, target)
}

// create hash map
// later we can easily find potential key
const getHash = function (nums) {
  const hash = new Map()

  for (let i = 0; i < nums.length; i++) {
    let key = nums[i]
    let value = i
    hash.set(key, value)
  }

  return hash
}

// subtract potential value from target,
// find the key in hash
const findSum = (hash, nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    let potentialKey = target - nums[i]

    if (hash.has(potentialKey) && i !== hash.get(potentialKey)) {
      return [i, hash.get(potentialKey)]
    }
  }
}
