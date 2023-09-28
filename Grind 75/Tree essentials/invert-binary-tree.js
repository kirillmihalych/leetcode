// recursive
// Time O(n) || Space O(n)
// https://leetcode.com/problems/invert-binary-tree

var invertTree = function (root) {
  if (root == null)
    return (root[(root.left, root.right)] = [
      invertTree(root.right),
      invertTree(root.left),
    ])
  return root
}
