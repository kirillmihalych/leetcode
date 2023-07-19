// Binary search
// https://leetcode.com/problems/koko-eating-bananas/
// Time O(log(n))
var minEatingSpeed = function (piles, h) {
  let min = 1
  let max = Math.max(...piles)

  while (min < max) {
    let count = 0
    let k = Math.floor((min + max) / 2)
    for (const pile of piles) {
      count += Math.ceil(pile / k)
    }

    const isAllBananasEaten = count <= h
    if (isAllBananasEaten) max = k
    if (!isAllBananasEaten) min = k + 1
  }

  return max
}
