const arrayStringsAreEqual = (word1, word2) => {
  const str1 = word1.join('')
  const str2 = word2.join('')

  if (str1.length !== str2.length) return false

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      return false
    }
  }

  return true
}
