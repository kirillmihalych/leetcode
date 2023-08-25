// bit manipulation
//  Time O(1) | Space O(1)
// https://leetcode.com/problems/sum-of-two-integers/

var getSum = function (a, b) {
  while (b !== 0) {
    const [xor, carry] = [a ^ b, (a & b) << 1]

    a = xor
    b = carry
  }

  return a
}
