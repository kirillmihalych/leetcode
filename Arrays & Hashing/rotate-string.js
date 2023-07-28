// Array solution
// Time O(n) || Space O(n)
// https://leetcode.com/problems/rotate-string/
var rotateString = function (s, goal) {
  const arr = s.split('')

  for (let i = 0; i < s.length; i++) {
    let leftmostChar = arr.shift()
    arr.push(leftmostChar)

    const isGoal = arr.join('') === goal
    if (isGoal) return true
  }

  return false
}
