// https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/

const minOperations = (a) => {
  let m = a.length
  a = [...new Set(a)].sort((x, y) => x - y)
  let n = a.length,
    right = 0,
    max = 0
  for (let i = 0; i < n; i++) {
    while (right < n && a[right] - a[i] < m) right++
    max = Math.max(max, right - i)
  }
  return m - max
}
