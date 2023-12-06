const totalMoney = (n) => {
  let rem = n % 7
  let mult = Math.floor(n / 7)
  let total = 0
  while (mult) {
    total += 21 + mult * 7
    mult--
  }
  let remstart = Math.floor(n / 7) + 1
  while (rem) {
    total += remstart
    remstart++
    rem--
  }
  return total
}
