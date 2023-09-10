// dp - top down memo
// Time O(rows * columns) || Space O(rows * columns)
// https://leetcode.com/problems/unique-paths/

const uniquePaths = function (m, n) {
  const memo = getMemo(m, n)

  const recursive = (col, row) => {
    const isBaseCase = col === 1 || row === 1
    if (isBaseCase) return 1

    const hasSeen = memo[col][row] !== 0
    if (hasSeen) return memo[col][row]

    const down = recursive(col, row - 1)
    const right = recursive(col - 1, row)
    memo[col][row] = down + right

    return memo[col][row]
  }

  return recursive(m, n)
}

const getMemo = (col, row) =>
  new Array(col + 1).fill().map(() => new Array(row + 1).fill(0))
