// DP - top down memo,
// Time complexity for recursive solution of this problem
// will be exponential O(2^N)
// cause with each call of this function it will be two another calls
// But with Memo we avoid duplicate calculations
// So it will be
// Time O(n) || Space O(n)
// https://leetcode.com/problems/climbing-stairs

const climbStairs = (n) => {
  const memo = new Map()

  const recursive = (n) => {
    const isBaseCase = n <= 2
    if (isBaseCase) return n

    if (memo.has(n)) return memo.get(n)

    let [oneDown, twoDown] = [n - 1, n - 2]
    let oneStepDown = recursive(oneDown)
    let twoStepDown = recursive(twoDown)
    memo.set(n, oneStepDown + twoStepDown)

    return memo.get(n)
  }

  return recursive(n)
}
