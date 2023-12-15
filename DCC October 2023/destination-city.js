var destCity = function (paths) {
  let nextDest = paths[0][1]

  for (let i = 0; i < paths.length; i++) {
    if (paths[i][0] == nextDest) {
      nextDest = paths[i][1]
      i = 0
    }
  }

  return nextDest
}
