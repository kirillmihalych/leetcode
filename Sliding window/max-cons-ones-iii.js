// Sliding window
// https://leetcode.com/problems/max-consecutive-ones-iii
// Time O(n) || Space O(1)
var longestOnes = function (nums, k) {
  let start = 0
  let pref = 0
  let cons = 0
  let maxCons = 0

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]

    if (num === 1) {
      cons++
    } else if (num === 0 && pref < k) {
      pref++
    } else {
      maxCons = Math.max(maxCons, cons + pref)
      i = start
      start++
      cons = 0
      pref = 0
    }
  }

  maxCons = Math.max(maxCons, cons + pref)
  return maxCons
}
