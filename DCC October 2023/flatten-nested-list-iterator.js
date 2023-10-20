class NestedIterator {
  constructor(nestedList) {
    // stack of iterators
    this.stack = [nestedList.values()]
    this.head = null
  }

  hasNext() {
    if (this.head !== null) return true

    while (this.stack.length > 0) {
      const iterator = this.stack[this.stack.length - 1]
      const { value, done } = iterator.next()

      // remove if it doesn't has more values
      if (done) {
        this.stack.pop()
        continue
      }

      const next = value

      if (next.isInteger()) {
        this.head = next.getInteger()
        break
      } else {
        this.stack.push(next.getList().values())
      }
    }

    return this.head !== null
  }

  next() {
    const next = this.head
    this.head = null
    return next
  }
}
