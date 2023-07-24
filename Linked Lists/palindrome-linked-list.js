// fast & slow pointers
// https://leetcode.com/problems/palindrome-linked-list/
// Time O(n) || Space O(1)

const reverse = function (head) {
  let [prev, curr, next] = [null, head, null]

  while (curr) {
    next = curr.next
    curr.next = prev

    prev = curr
    curr = next
  }

  return prev
}

var isPalindrome = function (head) {
  let fast = head
  let slow = head
  let starterPointer = head
  let len = 0

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    len++
  }

  let mid = reverse(slow)

  while (len) {
    len--
    if (mid.val !== starterPointer.val) return false
    mid = mid.next
    starterPointer = starterPointer.next
  }

  return true
}
