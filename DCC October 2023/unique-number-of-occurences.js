function uniqueOccurrences(arr) {
  let obj = {}
  let set = new Set()
  for (let num of arr) {
    if (!obj[num]) {
      obj[num] = 1
    } else {
      obj[num]++
    }
  }

  for (let key in obj) {
    if (set.has(obj[key])) {
      return false
    } else {
      set.add(obj[key])
    }
  }
  return true
}
