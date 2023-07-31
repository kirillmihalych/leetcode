// Recursive sol
// Time ??? || Space ||
// https://leetcode.com/problems/fibonacci-number/submissions/

var fib = function(n) {
    if(n === 0) return n;
    if(n === 1) return n;
    
    return fib(n - 1) + fib(n - 2)
};