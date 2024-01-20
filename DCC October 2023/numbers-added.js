var addTwoNumbers = function (l1, l2) {
  let carry = 0
  let resultNode = new ListNode(0)
  let returnNode = resultNode

  while (l1 || l2) {
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
    resultNode.next = new ListNode(sum >= 10 ? sum % 10 : sum)
    carry = sum >= 10 ? Math.floor(sum / 10) : 0
    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
    resultNode = resultNode.next
  }

  if (carry > 0) {
    resultNode.next = new ListNode(carry)
  }

  return returnNode.next
}
