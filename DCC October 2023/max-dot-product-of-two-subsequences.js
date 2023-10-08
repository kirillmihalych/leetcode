// https://leetcode.com/problems/max-dot-product-of-two-subsequences

var maxDotProduct = function (nums1, nums2) {
  const m = nums1.length // Length of nums1
  const n = nums2.length // Length of nums2

  // Initialize two arrays for dynamic programming
  let current = new Array(n + 1).fill(Number.MIN_SAFE_INTEGER)
  let previous = new Array(n + 1).fill(Number.MIN_SAFE_INTEGER)

  // Iterate through nums1 and nums2
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // Calculate the current product
      const currProduct = nums1[i - 1] * nums2[j - 1]

      // Update the current cell with the maximum of four possible values
      current[j] = Math.max(
        currProduct, // Product of current elements
        previous[j], // Value from the previous row in the same column
        current[j - 1], // Value from the current row in the previous column
        currProduct + Math.max(0, previous[j - 1]) // Include the previous cell in the diagonal if it's positive
      )
    }

    // Swap the current and previous arrays for the next iteration
    ;[current, previous] = [previous, current]
  }

  // The result is in the last cell of the previous array
  return previous[n]
}
