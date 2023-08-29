// dp memo top-down
// Time ?? || Space ??
// https://leetcode.com/problems/coin-change/

var coinChange = function(coins, amount) {
    const memo = new Map();
    let res = Infinity;
    
    const dfs = (number) => {
        if(memo.has(number)) return memo.get(number)
        if(number === 0) return 0;
        let res = Infinity;
        
        for(let i = coins.length - 1; i >= 0; i--){
           let coin = coins[i];
           if(number - coin >= 0) res = Math.min(res, dfs(number - coin))
        }
        
        memo.set(number, res + 1)
        return res + 1
    }
    
    
    const result = dfs(amount)
    return result === Infinity ? -1 : result
};