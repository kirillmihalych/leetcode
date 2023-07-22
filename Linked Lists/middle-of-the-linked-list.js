//  brute force
//  middle - of - the - linked - list
var middleNode = function (head) {
  const list_length = count_length(head)
  if (list_length === 1) return head

  let mid = 0
  const isOdd = list_length % 2 !== 0
  if (isOdd) mid = Math.ceil(list_length / 2)
  if (!isOdd) mid = Math.ceil(list_length / 2) + 1

  let next = head.next

  let n = 2
  while (n <= mid) {
    if (n === mid) return next
    next = next.next
    n++
  }
}

const count_length = function (head) {
  let count = 1
  let next = head.next
  while (next) {
    count += 1
    next = next.next
  }
  return count
}
