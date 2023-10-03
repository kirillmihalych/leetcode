// dfs, поиск в ширину
// Time O(V + E) || Space O(1)
// https://leetcode.com/problems/number-of-islands

const numIslands = function (grid) {
  let islands = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        islands += 1
        bfs(grid, i, j)
      }
    }
  }

  return islands
}

const bfs = (grid, i, j) => {
  let queue = [[i, j]]

  while (queue.length) {
    let [row, col] = queue.pop()

    if (grid[row][col] === '1') {
      grid[row][col] = 0
    }

    for (let [newRow, newCol] of [
      [row + 1, col],
      [row - 1, col],
      [row, col + 1],
      [row, col - 1],
    ]) {
      if (
        newRow >= 0 &&
        newRow < grid.length &&
        newCol >= 0 &&
        newCol < grid[0].length &&
        grid[newRow][newCol] === '1'
      ) {
        queue.push([newRow, newCol])
      }
    }
  }
}
