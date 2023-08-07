// DP top to down, hash map memo
// Time O(n) || Space O(n)
// https://leetcode.com/problems/fibonacci-number/

var fib = function (n, memo = new Map()) {
  const isBaseCase1 = n === 0
  if (isBaseCase1) return memo.get(n) || 0

  const isBaseCase2 = n === 1
  if (isBaseCase2) return memo.get(n) || 1

  const hasSeen = memo.has(n)
  if (hasSeen) return memo.get(n)

  const [oneDown, twoDown] = [n - 1, n - 2]
  const downOne = fib(oneDown, memo)
  const downTwo = fib(twoDown, memo)

  memo.set(n, downOne + downTwo)
  return memo.get(n)
}
