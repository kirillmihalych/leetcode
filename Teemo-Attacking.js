// https://leetcode.com/problems/teemo-attacking/

var findPoisonedDuration = function (timeSeries, duration) {
  let lasting = 0

  for (let i = 0; i < timeSeries.length; i++) {
    // if distance between two Teemo's attack,
    // less than duration of poison
    // it means that duration should be reset
    // and time that already was under poison
    // should be added to final result.
    // otherwise just adding duration.
    if (timeSeries[i + 1] - timeSeries[i] < duration) {
      lasting += timeSeries[i + 1] - timeSeries[i]
    } else {
      lasting += duration
    }
  }

  return lasting
}
