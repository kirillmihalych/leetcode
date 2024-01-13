var minSteps = function (s, t) {
  const n = s.length
  const counts = new Array(26).fill(0)

  for (let i = 0; i < n; i++) {
    const tIndex = t.charCodeAt(i) - 97
    const sIndex = s.charCodeAt(i) - 97

    counts[tIndex]++
    counts[sIndex]--
  }

  let res = 0

  for (let i = 0; i < 26; i++) {
    if (counts[i] > 0) res += counts[i]
  }

  return res
}
