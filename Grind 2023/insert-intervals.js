var insert = function (intervals, newInterval) {
  let index = 0
  let res = []

  while (index < intervals.length && intervals[index][1] < newInterval[0]) {
    res.push(intervals[index])
    index++
  }

  while (index < intervals.length && intervals[index][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[index][0], newInterval[0])
    newInterval[1] = Math.max(intervals[index][1], newInterval[1])
    index++
  }
  res.push(newInterval)

  while (index < intervals.length) {
    res.push(intervals[index])
    index++
  }

  return res
}
