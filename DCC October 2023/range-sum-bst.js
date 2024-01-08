var rangeSumBST = function (root, L, R) {
  let result = 0
  dfs(root)
  return result

  function dfs(root) {
    if (root == null) {
      return
    }
    if (root.val >= L && root.val <= R) {
      result += root.val
    }
    if (root.val == L) {
      dfs(root.right)
    } else if (root.val == R) {
      dfs(root.left)
    } else {
      dfs(root.left)
      dfs(root.right)
    }
  }
}
