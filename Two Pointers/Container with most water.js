// 2 Pointers
// Time O(n) | Space(1)
// https://leetcode.com/problems/container-with-most-water/
const maxArea = function (height) {
  let maxAmount = 0
  let left = 0
  let right = height.length - 1

  while (left < right) {
    let leftHeight = height[left]
    let rightHeight = height[right]

    let volume = Math.min(leftHeight, rightHeight) * Math.abs(left - right)
    maxAmount = Math.max(maxAmount, volume)

    const isRightGreater = rightHeight > leftHeight
    if (isRightGreater) left++

    const isLeftGreater = leftHeight >= rightHeight
    if (isLeftGreater) right--
  }

  return maxAmount
}
