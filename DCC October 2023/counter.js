function createCounter(n) {
  let count = n
  return () => {
    return count++
  }
}
