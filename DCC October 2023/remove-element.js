var removeElement = function (nums, val) {
  let low = 0
  let high = nums.length - 1

  for (let i = 0; i < nums.length; i++) {
    if (nums[low] === val) {
      nums[low] = nums[high]
      high--
    } else {
      low++
    }
  }

  return low
}
