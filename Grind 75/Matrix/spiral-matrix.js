// Matrix
// Time O(n * m) || Space O(n * m)
// https://leetcode.com/problems/spiral-matrix/

const spiralOrder = function (matrix) {
  // save coordinates, avoid duplicates
  const memo = []

  let rowEnd = matrix.length - 1
  let colEnd = matrix[0].length - 1

  let rowBegin = 0
  let colBegin = 0

  while (colBegin <= colEnd && rowBegin <= rowEnd) {
    for (let i = colBegin; i <= colEnd; i++) {
      memo.push(matrix[rowBegin][i])
    }
    rowBegin++

    for (let i = rowBegin; i <= rowEnd; i++) {
      memo.push(matrix[i][colEnd])
    }

    colEnd--
    if (rowBegin <= rowEnd) {
      for (let i = colEnd; i >= colBegin; i--) {
        memo.push(matrix[rowEnd][i])
      }
    }
    rowEnd--

    if (colBegin <= colEnd) {
      for (let i = rowEnd; i >= rowBegin; i--) {
        memo.push(matrix[i][colBegin])
      }
    }
    colBegin++
  }

  return memo
}
