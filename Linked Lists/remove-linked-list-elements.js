// create dummy
// https://leetcode.com/problems/remove-linked-list-elements/
// Time O(n) || Space O(n)
var removeElements = function (head, val) {
  let dummy = new ListNode(-Infinity, head)
  let prev = dummy
  let curr = head

  while (curr) {
    if (curr.val === val) {
      console.log('hello there')
      prev.next = curr.next
      curr = curr.next
    } else {
      prev = curr
      curr = curr.next
    }
  }

  return dummy.next
}
