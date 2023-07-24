// dummy node because of adding/removing
// https://leetcode.com/problems/merge-two-sorted-lists/submissions/
// Time O(n) || Space O(n)

var mergeTwoLists = function (l1, l2) {
  const dummy = new ListNode(-Infinity)
  let prev = dummy

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      prev.next = l1
      prev = l1
      l1 = l1.next
    } else {
      prev.next = l2
      prev = l2
      l2 = l2.next
    }
  }

  if (!l1) prev.next = l2
  if (!l2) prev.next = l1

  return dummy.next
}
