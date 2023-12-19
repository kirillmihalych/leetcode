var imageSmoother = function (matrix) {
  const matrixClone = JSON.parse(JSON.stringify(matrix))

  matrix.forEach((row, rowIdx) => {
    row.forEach((element, colIdx) => {
      matrix[rowIdx][colIdx] = calculateNew(matrixClone, rowIdx, colIdx)
    })
  })

  return matrix
}

function calculateNew(matrix, rowIdx, colIdx) {
  let seenValues = 0
  let cumulativeValue = 0

  for (let row = rowIdx - 1; row <= rowIdx + 1; row++) {
    if (matrix[row] === undefined) continue
    for (let col = colIdx - 1; col <= colIdx + 1; col++) {
      if (matrix[row][col] === undefined) continue
      seenValues++
      cumulativeValue += matrix[row][col]
    }
  }
  return Math.floor(cumulativeValue / seenValues)
}
