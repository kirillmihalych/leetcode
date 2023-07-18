// 2 Pointer
// https://leetcode.com/problems/trapping-rain-water/
const trap = function (height) {
  let [leftPointer, rightPointer] = [0, height.length - 1]
  let [maxLeft, maxRight, trapedWater] = [0, 0, 0]

  while (leftPointer < rightPointer) {
    const [leftHeight, rightHeight] = getHeights(
      height,
      leftPointer,
      rightPointer
    )
    const [leftWindow, rightWindow] = getWindows(
      height,
      leftPointer,
      rightPointer,
      maxLeft,
      maxRight
    )
    console.log(leftWindow, rightWindow)

    const isRightGreater = rightHeight >= leftHeight
    if (isRightGreater) {
      if (newMax(maxLeft, leftHeight)) maxLeft = leftHeight
      else trapedWater += leftWindow

      leftPointer++
    }

    const isLeftGreater = leftHeight > rightHeight
    if (isLeftGreater) {
      if (newMax(maxRight, rightHeight)) maxRight = rightHeight
      else trapedWater += rightWindow

      rightPointer--
    }
  }

  return trapedWater
}

const newMax = (max, height) => height > max

const getHeights = (height, leftPointer, rightPointer) => [
  height[leftPointer],
  height[rightPointer],
]

const getWindows = (height, leftPointer, rightPointer, maxLeft, maxRight) => [
  maxLeft - height[leftPointer],
  maxRight - height[rightPointer],
]
