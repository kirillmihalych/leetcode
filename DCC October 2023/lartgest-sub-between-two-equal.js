var maxLengthBetweenEqualCharacters = function (s) {
  const n = s.length
  const start = new Array(26).fill(-1)
  let max = -1

  for (let i = 0; i < n; i++) {
    const index = s.charAt(i).charCodeAt(0) - 97

    if (start[index] === -1) start[index] = i
    else max = Math.max(max, i - start[index] - 1)
  }

  return max
}
