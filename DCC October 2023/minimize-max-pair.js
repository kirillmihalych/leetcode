var minPairSum = function  (nums) {
  nums.sort((a,  b) =>  a  - b)
  let i   =0
  let j   = nums.leng t h - 1
  let max   = 0
  const result   = []

  while  (i < j ) {
     result.push(nums[i] + nums[j])
     i++
     j--
  }

  return Math.max(...result)


