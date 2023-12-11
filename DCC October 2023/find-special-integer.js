function findSpecialInteger(arr) {
  const data = {}
  arr.forEach((element) => {
    data[element] ? data[element]++ : (data[element] = 1)
  })

  for (let prop in data) {
    if (data[prop] > arr.length * 0.25) return parseInt(prop)
  }

  return 0
}
