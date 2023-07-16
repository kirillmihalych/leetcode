// Hash Set
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
