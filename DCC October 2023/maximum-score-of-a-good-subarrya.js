var maximumScore = function (nums, k) {
  let res = nums[k],
    i = k,
    j = k,
    min = res

  while (i > 0 || j < nums.length - 1) {
    if (i === 0) j++
    else if (j === nums.length - 1) i--
    else if (nums[i - 1] > nums[j + 1]) i--
    else j++
    const smaller = nums[i] < nums[j] ? nums[i] : nums[j]
    min = min < smaller ? min : smaller
    const temp = min * (j - i + 1)
    res = res > temp ? res : temp
  }
  return res
}
