const climbStairs = function (n) {
  const memo = new Map()

  const recursive = (n) => {
    const isBaseCase = n <= 2
    if (isBaseCase) return n

    if (memo.has(n)) return memo.get(n)

    const [next, nextNext] = [n - 1, n - 2]
    const oneStep = recursive(next)
    const twoSteps = recursive(nextNext)
    memo.set(n, oneStep + twoSteps)

    return memo.get(n)
  }

  return recursive(n)
}
