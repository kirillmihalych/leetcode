const garbageCollection = (garbage, travel) => {
  const n = garbage.length
  const letterCount = []
  let mpgTotal = [0, 0, 0]

  for (let i = 0; i < n; i++) {
    const gar = garbage[i].split('')
    const m = gar.filter((x) => x == 'M').length
    const p = gar.filter((x) => x == 'P').length
    const g = gar.filter((x) => x == 'G').length
    mpgTotal[0] += m
    mpgTotal[1] += p
    mpgTotal[2] += g
    letterCount.push([m, p, g])
  }

  let time = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 3; j++) {
      time += letterCount[i][j]
      mpgTotal[j] -= letterCount[i][j]
      if (i < n - 1 && mpgTotal[j] > 0) {
        time += travel[i]
      }
    }
  }
  return time
}
