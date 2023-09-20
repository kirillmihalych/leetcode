// Sliding window
// Time O(n) || Space O(n)
// https://leetcode.com/problems/container-with-most-water/

var maxArea = function (height) {
  let l = 0
  let r = height.length - 1
  let maxAmount = 0

  while (l < r) {
    let leftHeight = height[l]
    let rightHeight = height[r]

    let volume = Math.min(leftHeight, rightHeight) * Math.abs(r - l)
    maxAmount = Math.max(maxAmount, volume)

    const rightIsGreater = rightHeight >= leftHeight
    if (rightIsGreater) l++

    const leftIsGreater = leftHeight > rightHeight
    if (leftIsGreater) r--
  }

  return maxAmount
}
