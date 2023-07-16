//
// https://leetcode.com/problems/merge-intervals/
var merge = function (intervals) {
  const res = []
  // sorting array in purpose to get the lowest poing off intervals at the beggining
  intervals.sort((a, b) => a[0] - b[0])

  // temp is needed, because there can be more than 2 arrays to merge
  let temp = intervals[0]

  // interate through main array,
  // compare pairs of intervals,
  // and if end of 1st array of pair, greater than start of 2nd array of pair
  // it means that intervals are overlaping themself,
  // and should be merged
  for (let i = 0; i < intervals.length - 1; i++) {
    if (temp[1] >= intervals[i + 1][0]) {
      temp = [temp[0], Math.max(temp[1], intervals[i + 1][1])]
    } else {
      res.push(temp)
      temp = intervals[i + 1]
    }
  }

  // pushing last interval into results
  res.push(temp)
  return res
}
