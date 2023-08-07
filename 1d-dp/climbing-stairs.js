// DP - top down, array - Memoization
// Time O(n) || Space O(n)
// https://leetcode.com/problems/climbing-stairs

const climbStairs = (n, index = 0, memo = Array(n + 1).fill(0)) => {
  const isBaseCase1 = n < index
  if (isBaseCase1) return 0

  const isBaseCase2 = index === n
  if (isBaseCase2) return 1

  const hasSeen = memo[index] !== 0
  if (hasSeen) return memo[index]

  const [next, nextNext] = [index + 1, index + 2]
  const left = climbStairs(n, next, memo)
  const right = climbStairs(n, nextNext, memo)

  memo[index] = left + right
  return memo[index]
}
