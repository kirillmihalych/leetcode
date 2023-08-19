// Bit manipulation
// Time O(1) || Space O(1)
// https://leetcode.com/problems/reverse-bits/

var reverseBits = function (n, bit = 0) {
  for (let i = 0; i < 32; i++) {
    bit <<= 1 // Double * 2
    bit |= n & 1 // Flip
    n >>= 1 // Reduce * 0.5
  }

  return bit >>> 0
}
