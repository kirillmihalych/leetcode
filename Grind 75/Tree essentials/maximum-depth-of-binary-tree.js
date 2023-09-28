// dfs
// Time O(n) || Space O(n)
// https://leetcode.com/problems/maximum-depth-of-binary-tree

const maxDepth = function (root) {
  let max = 0

  const recursive = (root, count = 0) => {
    if (root == null) {
      max = Math.max(max, count)
      count = 0
      return 0
    }

    count = count + 1
    const left = recursive(root.left, count)
    const right = recursive(root.right, count)

    return max
  }

  return recursive(root)
}

// clean

const maxDepth1 = function (root) {
  const recursive = (root, count) => {
    if (root == null) return 0

    const left = recursive(root.left)
    const right = recursive(root.right)

    const max = Math.max(left, right)

    return max + 1
  }

  return recursive(root)
}
