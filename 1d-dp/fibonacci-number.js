// DP top to down, hash map memo
// Time O(n) || Space O(n)
// https://leetcode.com/problems/fibonacci-number/

const fib = function(n) {
    const memo = new Map();
    
    const recursive = (n) => {
        const isBaseCase = n <= 1
        if(isBaseCase) return n
        
        if(memo.has(n)) return memo.get(n)
        
        let [prev, prevPrev] = [n - 1, n - 2]
        let oneStep = recursive(prev)
        let twoStep = recursive(prevPrev)
        memo.set(n, oneStep + twoStep)
        
        return memo.get(n)
    }
    
    return recursive(n)
};
