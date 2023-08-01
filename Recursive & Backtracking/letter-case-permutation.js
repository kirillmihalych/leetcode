// Dfs, slate, base case.
// Time ?? || Space ??
// https://leetcode.com/problems/letter-case-permutation/
var letterCasePermutation = function (s) {
  const result = []

  const dfs = (i, str, box) => {
    //     base case
    if (i === str.length) {
      result.push(box.join(''))
      return
    }

    //     recursive case
    let isNumber = Number.isInteger(parseInt(str[i]))
    if (isNumber) {
      box.push(str[i])
      dfs(i + 1, str, box)
      box.pop()
    } else {
      box.push(str[i].toLowerCase())
      dfs(i + 1, str, box)
      box.pop()

      box.push(str[i].toUpperCase())
      dfs(i + 1, str, box)
      box.pop()
    }
  }

  dfs(0, s, [])
  return result
}
