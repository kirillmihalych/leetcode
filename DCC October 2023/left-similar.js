const f = (node, A = []) => {
  if (!node) return A
  if (!node.left && !node.right) {
    A.push(node.val)
    return A
  }
  f(node.left, A)
  f(node.right, A)
  return A
}
var leafSimilar = function (root1, root2) {
  return f(root1).join('-') === f(root2).join('-')
}
