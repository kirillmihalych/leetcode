var countHomogenous = function (s) {
  let mod = 10 ** 9 + 7
  let result = 0
  let count = 0
  let prev = ''
  for (const char of s) {
    if (char === prev) {
      count++
    } else {
      count = 1
    }
    prev = char
    result = (result + count) % mod
  }
  return result
}
