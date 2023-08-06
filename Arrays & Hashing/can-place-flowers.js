// Can Place Flowers
// Time O(n) || Space O(n)
// https://leetcode.com/problems/can-place-flowers/
var canPlaceFlowers = function (flowerbed, n) {
  let flowers = 0

  for (let i = 0; i < flowerbed.length; i++) {
    const isPrevZero = flowerbed[i - 1] === 0 || flowerbed[i - 1] === undefined
    const isNextZero = flowerbed[i + 1] === 0 || flowerbed[i + 1] === undefined
    const isCurrZero = flowerbed[i] === 0

    const canPlaceFlower = isPrevZero && isNextZero && isCurrZero

    if (canPlaceFlower) {
      flowers++
      i++
    }
  }

  return n <= flowers
}
s
