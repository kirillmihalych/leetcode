// dfs, поиск в ширину
// Time O(V + E) || Space O(1)
// https://leetcode.com/problems/flood-fill/

const floodFill = function (image, sr, sc, color) {
  const currColor = image[sr][sc]
  if (currColor === color) return image
  // 1)создать очередь с проверяемыми координатами
  const queue = [[sr, sc]]

  while (queue.length) {
    // 2)извлечь из очереди очередные координаты
    const [row, col] = queue.shift()

    // 3)проверить соответсвуют ли координаты искомому цветы
    if (image[row][col] === currColor) {
      // 4)изменить цвет если соответсвуют
      image[row][col] = color
      // 4)добавить всех соседей в очередь, с проверкой не захожу ли за край
      // up
      if (row - 1 >= 0) queue.push([row - 1, col])
      // down
      if (row + 1 < image.length) queue.push([row + 1, col])
      // right
      if (col + 1 < image[0].length) queue.push([row, col + 1])
      // left
      if (col - 1 >= 0) queue.push([row, col - 1])
    }
    // 5)цикл
  }

  // 6) если очередь пуста, значит проверены все координаты
  return image
}
