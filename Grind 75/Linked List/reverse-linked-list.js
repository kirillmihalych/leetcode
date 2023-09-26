// Using space
// Time O(n) || Space O(1)
// https://leetcode.com/problems/reverse-linked-list/

var reverseList = function (head) {
  let [prev, curr, next] = [null, head, null]

  while (curr) {
    // save next
    next = curr.next
    // reverse
    curr.next = prev

    // move forward
    prev = curr
    curr = next
  }

  return prev
}
