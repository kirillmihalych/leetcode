// Time O(n) ||Space O(1)
// https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color

const winnerOfGame = function (colors) {
  let aliceTurns = 0
  let aCount = 0

  for (let i = 0; i < colors.length; i++) {
    if (colors[i] === 'A') {
      aCount = aCount + 1
    }

    if (colors[i] === 'B' || i === colors.length - 1) {
      if (aCount >= 3) {
        // bCount - 2 потому что может насчитать 5 и больше, -2 потому что крайние нельзя включать
        aliceTurns = aliceTurns + (aCount - 2)
      }
      aCount = 0
    }
  }

  let bobTurns = 0
  let bCount = 0

  for (let i = 0; i < colors.length; i++) {
    if (colors[i] === 'B') {
      bCount = bCount + 1
    }

    if (colors[i] === 'A' || i === colors.length - 1) {
      // bCount - 2 потому что может насчитать 5 и больше, -2 потому что крайние нельзя включать
      if (bCount >= 3) {
        bobTurns = bobTurns + (bCount - 2)
      }
      bCount = 0
    }
  }

  return aliceTurns > bobTurns
}
