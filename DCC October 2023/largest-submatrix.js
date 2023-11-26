var largestSubmatrix = function (matrix) {
  const rows = matrix.length
  const cols = matrix[0].length
  let result = 0
  let count

  for (let i = 0; i < cols; ++i) {
    count = 0
    for (let j = 0; j < rows; ++j) {
      if (matrix[j][i] === 1) {
        ++count
      } else {
        count = 0
      }

      matrix[j][i] = count
    }
  }

  for (const row of matrix) {
    row.sort((a, b) => a - b)
    for (let i = 0; i < cols; i++) {
      if (row[i] === 0) continue
      result = Math.max(result, row[i] * (cols - i))
    }
  }

  return result
}
