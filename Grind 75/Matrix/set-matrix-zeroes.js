// Matrix
// Time O(m * n) || Space O(n)
// https://leetcode.com/problems/set-matrix-zeroes/

const setZeroes = function (matrix) {
  const memo = new Set()

  // find a zero
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 0) {
        // save coordinates
        memo.add([col, row])
      }
    }
  }

  // change to zeros
  for (let coordinates of memo) {
    let [c, r] = coordinates
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        if (col === c || row === r) matrix[row][col] = 0
      }
    }
  }
}
