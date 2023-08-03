// dfs ??
// Time ?? || Time ??
// https://leetcode.com/problems/combination-sum/
var combinationSum = function (candidates, target) {
  return dfs(target, candidates)
}

const dfs = (
  target,
  candidates,
  combination = [],
  combinations = [],
  index = 0
) => {
  const isTargetLess = target < 0
  if (isTargetLess) return combinations

  const isTarget = target === 0
  if (isTarget) return combinations.push(combination.slice())

  for (let i = index; i < candidates.length; i++) {
    backTrack(target, candidates, i, combination, combinations)
  }

  return combinations
}

const backTrack = (target, candidates, i, combination, combinations) => {
  combination.push(candidates[i])
  dfs(target - candidates[i], candidates, combination, combinations, i)
  combination.pop()
}
