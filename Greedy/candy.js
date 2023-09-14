// Greedy
// Time O(n) || Space O(n)
// https://leetcode.com/problems/candy/

const candy = function (ratings) {
  let n = ratings.length
  const candies = new Array(n).fill(1)

  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1
    }
  }

  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1)
    }
  }

  return candies.reduce((a, b) => a + b, 0)
}
