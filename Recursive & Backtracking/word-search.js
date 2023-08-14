// matrix, backtracking
// Time ?? || Space ??
// https://leetcode.com/problems/word-search/

var exist = function (board, word) {
  let result = false

  const recursive = (row, char, i) => {
    if (!result) {
      if (row < 0 || char < 0 || row >= board.length || char >= board[0].length)
        return
      if (board[row][char] !== word[i]) return
      if (i == word.length - 1) {
        result = true
        return
      }
      board[row][char] = null // mark our path so we dont go back and forth
      recursive(row - 1, char, i + 1)
      recursive(row + 1, char, i + 1)
      recursive(row, char + 1, i + 1)
      recursive(row, char - 1, i + 1)
      board[row][char] = word[i] // reset our board , very important
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        recursive(i, j, 0)
        if (result) return result
      }
    }
  }

  return result
}
