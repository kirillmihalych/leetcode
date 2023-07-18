// Brute force
// https://leetcode.com/problems/search-a-2d-matrix/

const searchMatrix = function (matrix, target) {
  for (let i = 0; i <= matrix.length - 1; i++) {
    let maxChar = matrix[i][matrix[i].length - 1]
    let l = 0
    let r = matrix[i].length - 1

    if (target > maxChar) continue

    while (l <= r) {
      let m = Math.floor((l + r) / 2)
      let guess = matrix[i][m]

      if (guess === target) return true
      if (guess > target) r = m - 1
      if (guess < target) l = m + 1
    }
  }

  return false
}

// Binary search 0(log(mn))
var searchMatrix2d = function (matrix, target) {
  let left = 0
  let right = matrix.length - 1
  let targetRow = []

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    let min = matrix[mid][0]
    let max = matrix[mid][matrix[mid].length - 1]

    if (target === max || target === min) return true

    if (target < max && target > min) {
      targetRow = matrix[mid]
      break
    }

    if (target > max) left = mid + 1
    if (target < min) right = mid - 1
  }

  let l = 0
  let r = targetRow.length - 1

  while (l <= r) {
    let m = Math.floor((l + r) / 2)
    let guess = targetRow[m]

    if (guess === target) return true
    if (guess > target) r = m - 1
    if (guess < target) l = m + 1
  }

  return false
}
