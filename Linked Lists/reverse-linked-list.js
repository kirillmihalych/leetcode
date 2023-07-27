// iterative solution
// Time O(n) || Space(1)
// https://leetcode.com/problems/reverse-linked-list/submissions/

var reverseList = function (head) {
  let [prev, curr, next] = [null, head, null]

  while (curr) {
    next = curr.next
    curr.next = prev

    prev = curr
    curr = next
  }

  return prev
}

// recursive solution
