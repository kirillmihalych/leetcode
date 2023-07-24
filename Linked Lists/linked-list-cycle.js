// PATERN: fast & slow 2 pointers
// Time O(n) || Space O(n)
// linked-list-cycle
// https://leetcode.com/problems/linked-list-cycle/submissions/

var hasCycle = function (head) {
  let slow = head
  let fast = head

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next

    if (fast === slow) return true
  }

  return false
}
