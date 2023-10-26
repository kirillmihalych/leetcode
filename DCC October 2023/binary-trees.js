/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function (arr) {
  // make a dic to record `num`s in `arr` can be product of `x` and `y`
  /** @type {Map<number,Set<number>} */
  let dic = new Map() // dic[num]=[x1,z2...] // y1=product/x1
  let set = new Set(arr)
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      addNode(arr[i], arr[j])
    }
  }
  /** @type {Map<number,number} */
  let cache = new Map(),
    rtn = 0,
    modBy = Math.pow(10, 9) + 7
  // count each num
  for (let x of arr) {
    rtn = (rtn + countOfnode(x)) % modBy
  }
  return rtn

  function addNode(x, y) {
    if (x > y) return addNode(y, x)
    let product = x * y
    if (!set.has(product)) return
    if (!dic.has(product)) dic.set(product, new Set())
    dic.get(product).add(x)
  }
  // recursively count and cache results
  function countOfnode(node) {
    if (cache.has(node)) return cache.get(node)
    let rtn = 1 // self
    if (dic.has(node)) {
      for (let x of dic.get(node)) {
        let y = node / x
        // x can have `countOfnode(x)` forms and y the same
        rtn = (rtn + countOfnode(x) * countOfnode(y) * (x == y ? 1 : 2)) % modBy
      }
    }
    cache.set(node, rtn)
    return rtn
  }
}
