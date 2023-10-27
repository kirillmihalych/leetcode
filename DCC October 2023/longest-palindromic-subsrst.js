const longestPalindrome = function (s) {
  let longest = ''

  for (let i = 0; i < s.length; i++) {
    let odd = getDrome(s, i, i)
    let even = getDrome(s, i, i + 1)

    let bigger = odd.length > even.length ? odd : even

    if (bigger.length > longest.length) {
      longest = bigger
    }
  }

  return longest
}

const getDrome = (s, i, j) => {
  while (s[i] === s[j] && i >= 0 && j <= s.length - 1) {
    i--
    j++
  }

  return s.slice(i + 1, j)
}
