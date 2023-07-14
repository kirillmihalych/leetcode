// Brute Force solution
// https://leetcode.com/problems/top-k-frequent-elements/
var topKFrequent = function (nums, k) {
  const hash = new Map()
  const sub = []
  if (nums.length < 2) return nums

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (hash.has(num)) continue
    let temp = 1
    for (let j = i + 1; j < nums.length; j++) {
      if (num === nums[j]) temp += 1
    }

    sub.push([num, temp])
    hash.set(num, temp)
  }

  const pairs = sub.sort((a, b) => b[1] - a[1]).slice(0, k)
  const keys = []
  for (const pair of pairs) keys.push(pair[0])

  return keys
}
