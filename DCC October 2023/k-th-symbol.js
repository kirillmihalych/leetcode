var kthGrammar = function (N, K) {
  if (N === 1) return 0
  // passing empty string and K as arguments
  function getParentSymbol(level, pos) {
    // we only have one counter left add 0 to the str
    if (level === 2) {
      if (pos === 1) {
        return 0
      }
      return 1
    }
    if (getParentSymbol(level - 1, Math.ceil(pos / 2)) === 0) {
      if (pos % 2 == 1) {
        return 0
      }
      return 1
    } else {
      if (pos % 2 === 1) {
        return 1
      }
      return 0
    }
  }
  return getParentSymbol(N, K)
}
