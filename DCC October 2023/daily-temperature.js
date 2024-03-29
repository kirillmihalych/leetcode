var dailyTemperatures = function (temperatures) {
  var arr = []
  for (var i = 0; i < temperatures.length - 1; i++) {
    let count = 0

    if (temperatures[i] < temperatures[i + 1]) {
      count++
      arr.push(count)
    } else {
      let j = i
      let k = i
      count = 0
      while (
        temperatures[j] >= temperatures[k + 1] &&
        temperatures[k + 2] !== undefined
      ) {
        count++
        k++
      }

      if (
        temperatures[j] >= temperatures[k + 1] &&
        temperatures[k + 2] === undefined
      ) {
        arr.push(0)
      } else {
        arr.push(count + 1)
      }
    }
  }
  arr.push(0)
  return arr
}
