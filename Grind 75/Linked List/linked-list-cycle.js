// Two pointers fast and slow
// Time O(n) || Space O(1)
// https://leetcode.com/problems/linked-list-cycle/

var hasCycle = function (head) {
  let fast = head
  let slow = head

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next

    if (fast === slow) return true
  }

  return false
}
