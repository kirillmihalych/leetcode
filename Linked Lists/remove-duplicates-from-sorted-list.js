//  add dummy node if you need remove or add something from linked list
//  https://leetcode.com/problems/remove-duplicates-from-sorted-list/
//  Time O(n) || Space O(n)

var deleteDuplicates = function (head) {
  let dummy = new ListNode(-Infinity, head)
  let curr = head
  let prev = dummy

  while (curr) {
    if (curr.val === prev.val) {
      while (curr && curr.val === prev.val) {
        curr = curr.next
      }
      prev.next = curr
    } else {
      prev = curr
      curr = curr.next
    }
  }

  return dummy.next
}
