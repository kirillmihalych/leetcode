// Time amortized O(1) || Space O(1)
// https://leetcode.com/problems/implement-queue-using-stacks/

var MyQueue = function () {
  this.stack = []
  this.temp = []
}

MyQueue.prototype.push = function (x) {
  this.stack.push(x)
}

MyQueue.prototype.pop = function () {
  while (!this.temp.length) {
    while (this.stack.length) {
      this.temp.push(this.stack.pop())
    }
  }

  return this.temp.pop()
}

MyQueue.prototype.peek = function () {
  while (!this.temp.length) {
    while (this.stack.length) {
      this.temp.push(this.stack.pop())
    }
  }

  return this.temp[this.temp.length - 1]
}

MyQueue.prototype.empty = function () {
  return !this.stack.length && !this.temp.length
}
