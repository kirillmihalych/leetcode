// dummy & prev, getSize, изменяются линки, а не значения!
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
// Time O(n) || Space O(n)

var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(-Infinity, head)
  let prev = dummy
  let curr = head
  let size = getSize(head)

  while (curr) {
    if (size === n) {
      prev.next = curr.next
      curr = curr.next
    } else {
      prev = curr
      curr = curr.next
    }
    size--
  }

  return dummy.next
}

const getSize = (head) => {
  let length = 1
  let next = head.next

  while (next) {
    length += 1
    next = next.next
  }

  return length
}
