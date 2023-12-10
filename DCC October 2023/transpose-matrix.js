var transpose = function (A) {
  return A[0].map((c, i) => A.map((r) => r[i]))
}
