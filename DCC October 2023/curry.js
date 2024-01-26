function curry(f) {
  return function (a) {
    return function (b) {
      return f(a, b)
    }
  }
}

function sum(a, b) {
  return a + b
}

let curriedSum = curry(sum)
let sumWithTwo = curriedSum(2)

console.log(sumWithTwo(3))
console.log(sumWithTwo(8))

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args)
    return func.apply(this, args)
  }

  wrapper.calls = []

  return wrapper
}

const calls = spy(sum)
calls(3, 5)
calls(10, 5)

console.log(calls.calls)

function currying(func) {
  return function curried(...args) {
    if (func.length <= args.length) {
      return func(...args)
    } else {
      return function (...args2) {
        return curried(...args.concat(args2))
      }
    }
  }
}

function currying(func) {
  return function curried(...args) {
    if (func.length <= args.length) {
      return func.apply(this, args)
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}

function threeSum(a, b, c) {
  return a + b + c
}

const sumResult = currying(threeSum)

console.log(sumResult(3, 4, 5))
console.log(sumResult(3)(4, 5))
console.log(sumResult(1)(2)(3))
