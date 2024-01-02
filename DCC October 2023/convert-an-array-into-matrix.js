var findMatrix = function (nums) {
  const map = {}
  const ans = []

  for (const num of nums) {
    map[num] = (map[num] || 0) + 1
    if (map[num] > ans.length) ans.push([])
    ans[map[num] - 1].push(num)
  }

  return ans
}
