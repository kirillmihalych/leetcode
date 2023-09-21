// Recursion
// Time O(2 ^ n) || Space O(n)
// https://leetcode.com/problems/generate-parentheses/

const generateParenthesis = function (n) {
  const result = []
  const open = '('
  const close = ')'

  const recursive = (left, right, slate) => {
    if (left > right) return
    const isBaseCase = left === 0 && right === 0
    if (isBaseCase) {
      result.push(slate.slice().join(''))
      return
    }

    if (left > 0) {
      slate.push(open)
      recursive(left - 1, right, slate)
      slate.pop()
    }

    if (right > 0) {
      slate.push(close)
      recursive(left, right - 1, slate)
      slate.pop()
    }

    return result
  }

  return recursive(n, n, [])
}
