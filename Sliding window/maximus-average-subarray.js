// sliding window [can do better]
// Time O(n^2)|| Space O(n)
// https://leetcode.com/problems/maximum-average-subarray-i/

var findMaxAverage = function (nums, k) {
  let maxAv = 0
  let low = 0
  let high = k - 1

  if (nums.length === 1) return nums[low]

  while (high < nums.length) {
    let pointer = low
    let av = 0
    while (pointer <= high) {
      av += nums[pointer]
      pointer++
    }
    av = av / k

    maxAv = Math.max(maxAv, av)
    if (maxAv === 0 && Math.abs(maxAv) < Math.abs(av)) maxAv = av

    low++
    high++
  }

  return maxAv
}
