// dp - top down memo
// Time O(rows * columns) || Space O(rows * columns)
// https://leetcode.com/problems/unique-paths/

const uniquePaths = function (m, n) {
  let memo = getMemo(m, n)

  const recursive = (column, row) => {
    const isBaseCase = column === 1 || row === 1
    if (isBaseCase) return 1

    const hasSeen = memo[row][column] !== 0
    if (hasSeen) return memo[row][column]

    const down = recursive(column - 1, row)
    const right = recursive(column, row - 1)

    memo[row][column] = down + right

    return memo[row][column]
  }

  return recursive(n, m)
}

const getMemo = (row, col) =>
  new Array(row + 1).fill().map(() => new Array(col + 1).fill(0))
