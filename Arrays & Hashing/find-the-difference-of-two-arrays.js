// Set
// Time O(n) || Space O(n)
// https://leetcode.com/problems/find-the-difference-of-two-arrays/submissions/

var findDifference = function (nums1, nums2) {
  const setOne = new Set(nums1)
  const setTwo = new Set(nums2)
  let res = []

  let tempOne = []
  for (const num of setOne) {
    if (!setTwo.has(num)) tempOne.push(num)
  }
  res.push(tempOne)

  let tempTwo = []
  for (const num of setTwo) {
    if (!setOne.has(num)) tempTwo.push(num)
  }
  res.push(tempTwo)

  return res
}
