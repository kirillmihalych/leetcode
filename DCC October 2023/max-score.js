var maxScore = function (s) {
  let oneCount = 0

  for (const char of s) {
    if (char === '1') oneCount++
  }

  let max = 0
  let zeroCount = 0

  for (let i = 0; i < s.length - 1; i++) {
    const char = s.charAt(i)

    if (char === '0') zeroCount++
    else oneCount--

    max = Math.max(max, oneCount + zeroCount)
  }

  return max
}
