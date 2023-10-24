var largestValues = function (root) {
  let result = []

  levelOrderMax(root, result)

  return result
}

var levelOrderMax = (node, result, depth = 0) => {
  if (!node) return

  if (result[depth] === undefined || node.val > result[depth]) {
    result[depth] = node.val
  }

  levelOrderMax(node.left, result, depth + 1)
  levelOrderMax(node.right, result, depth + 1)
}
