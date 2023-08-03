// dfs ???
// Time ?? || Space ??
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
var letterCombinations = function (digits) {
  return dfs(digits)
}

const dfs = (digits, combination = [], combinations = []) => {
  const isBaseCase = !digits
  if (isBaseCase) {
    if (combination.length) combinations.push(combination.join(''))
    return combinations
  }

  let letters = phoneButtons[digits[0]]

  for (const char of letters) {
    backTrack(char, digits, combination, combinations)
  }

  return combinations
}

const backTrack = (char, digits, combination, combinations) => {
  combination.push(char)
  dfs(digits.slice(1), combination, combinations)
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
