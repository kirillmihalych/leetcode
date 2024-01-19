var twoSum = function (nums, target) {
  const map = getMap(nums)

  for (let i = 0; i < nums.length; i++) {
    let key = target - nums[i]

    if (map.has(key) && map.get(key) !== i) {
      return [map.get(key), i]
    }
  }
}

const getMap = (nums) => {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i)
  }

  return map
}
