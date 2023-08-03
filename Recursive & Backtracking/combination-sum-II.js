// dfs ??
// Time ?? || Time ??
// https://leetcode.com/problems/combination-sum-ii/

var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b)
  return dfs(target, candidates)
}

const dfs = (
  target,
  candidates,
  combination = [],
  combinations = [],
  index = 0,
  set = new Set()
) => {
  let sum = 0
  for (let j = 0; j < combination.length; j++) {
    sum += combination[j]
  }

  const isTarget = sum === target
  if (isTarget) combinations.push(combination.slice())

  const isGreater = sum > target
  if (isGreater) return

  for (let i = index; i < candidates.length; i++) {
    if (set.has(candidates[i])) continue

    backTrack(target, candidates, combination, combinations, i, set)
  }

  return combinations
}

const backTrack = (target, candidates, combination, combinations, i, set) => {
  combination.push(candidates[i])
  set.add(candidates[i])
  dfs(target, candidates, combination, combinations, i + 1)
  combination.pop()
}
