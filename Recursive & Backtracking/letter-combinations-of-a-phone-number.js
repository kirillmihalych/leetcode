// dfs ???
// Time ?? || Space ??
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
var letterCombinations = function (digits) {
  return dfs(digits)
}

const dfs = (digits, combination = [], combinations = [], i = 0) => {
  if (digits.length === 0) return []
  const isBaseCase = i === digits.length
  if (isBaseCase) {
    combinations.push(combination.join(''))
    return combinations
  }

  let chars = phoneButtons[digits[i]]

  for (const char of chars) {
    backTrack(digits, char, combination, combinations, i)
  }

  return combinations
}

const backTrack = (digits, char, combination, combinations, i) => {
  combination.push(char)
  dfs(digits, combination, combinations, i + 1)
  combination.pop(char)
}

const phoneButtons = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
}
