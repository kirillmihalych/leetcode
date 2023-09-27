var MyStack = function () {
  this.inQueue = []
  this.outQueue = []
}

/**
 * add top the top
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.inQueue.push(x)
}

/**
 * remove elemnt from the top and return that element
 * @return {number}
 */
MyStack.prototype.pop = function () {
  while (this.inQueue.length > 1) {
    this.outQueue.push(this.inQueue.shift())
  }

  const lastItem = this.inQueue.shift()

  ;[this.inQueue, this.outQueue] = [this.outQueue, this.inQueue]

  return lastItem
}

/**
 * Get from top
 * @return {number}
 */
MyStack.prototype.top = function () {
  while (this.inQueue.length > 1) {
    this.outQueue.push(this.inQueue.shift())
  }

  const lastItem = this.inQueue[0]

  this.outQueue.push(this.inQueue.shift())
  ;[this.inQueue, this.outQueue] = [this.outQueue, this.inQueue]

  return lastItem
}

/**
 * Return whether the stack i empty
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.inQueue.length === 0
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
