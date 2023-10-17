var validateBinaryTreeNodes = function (n, leftChild, rightChild) {
  //iterating through 0 to N beacuse root is not always  0.
  for (let i = 0; i < n; i++) {
    let q = []
    let hasBinaryTreeNodes = bfs(q, i)
    if (hasBinaryTreeNodes) {
      return true
    }
  }

  return false

  function bfs(q, i) {
    q.push(i)
    let set = new Set()

    while (q.length) {
      let data = q.shift()

      //cycle
      if (set.has(data)) {
        return false
      }
      set.add(data)
      //left child
      if (leftChild[data] != -1) {
        q.push(leftChild[data])
      }

      //right child
      if (rightChild[data] != -1) {
        q.push(rightChild[data])
      }
    }

    return set.size == n
  }
}
