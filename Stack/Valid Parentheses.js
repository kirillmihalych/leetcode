// Stack
// https://leetcode.com/problems/valid-parentheses/submissions/
var isValid = function (s, stack = []) {
  for (const char of s.split('')) {
    const isParentheses = char === '('
    if (isParentheses) stack.push(')')

    const isCurlyBrace = char === '{'
    if (isCurlyBrace) stack.push('}')

    const isSquareBracket = char === '['
    if (isSquareBracket) stack.push(']')

    const isOpenPair = isParentheses || isCurlyBrace || isSquareBracket
    if (isOpenPair) continue

    const isEmpty = !stack.length
    const isWrongPair = stack.pop() !== char
    const isValid = isEmpty || isWrongPair
    if (isValid) return false
  }

  return stack.length === 0
}
