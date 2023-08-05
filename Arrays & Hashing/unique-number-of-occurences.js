// Hash map
// https://leetcode.com/problems/unique-number-of-occurrences/
// Time O(n) || Space O(n)

var uniqueOccurrences = function (arr) {
  let hashMap = new Map()
  for (let i = 0; i < arr.length; i++) {
    hashMap.set(arr[i], hashMap.get(arr[i]) + 1 || 1)
  }

  const values = [...hashMap.values()]

  const set = [...new Set(values)]

  return set.length === values.length
}
