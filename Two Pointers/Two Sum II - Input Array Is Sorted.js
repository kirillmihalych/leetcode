// 2 Pointers
// Time O(n) || Space O(n)
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
var twoSum = function (numbers, target) {
  let min = 0
  let max = numbers.length - 1

  while (min < max) {
    let sum = numbers[min] + numbers[max]
    if (sum === target) return [min + 1, max + 1]
    if (sum > target) max--
    if (sum < target) min++
  }
}
