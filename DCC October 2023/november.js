var findMode = function  (root, h = {}) {
   = (node) => {
 if !n ode) return
  h[de.val] = ~~h[node.val] + 1
  goode.left)
  goode.right)
  
  (root)
  t max = Math.max.apply(null, Object.values(h))
return Object.keys(h).filter(((k)) => [k] === max)
}

