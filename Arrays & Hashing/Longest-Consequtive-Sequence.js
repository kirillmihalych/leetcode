// Hash Set
// Time O(n) || Space O(n)
// https://leetcode.com/problems/longest-consecutive-sequence
var longestConsecutive = function (nums, maxScore = 0) {
  const numSet = new Set(nums)

  for (const num of [...numSet]) {
    const prevNum = num - 1

    if (numSet.has(prevNum)) continue

    let [currNum, score] = [num, 1]

    const isStreak = () => numSet.has(currNum + 1)

    while (isStreak()) {
      currNum++
      score++
    }

    maxScore = Math.max(maxScore, score)
  }

  return maxScore
}

// Brute force
// Time O(n^3) || Space O(1)
var longestConsecutive = (nums, maxScore = 0) => {
  for (const num of nums) {
    let [currNum, score] = [num, 1]
    while (isStreak(nums, currNum + 1)) {
      currNum++
      score++
    }

    maxScore = Math.max(maxScore, score)
  }

  return maxScore
}
