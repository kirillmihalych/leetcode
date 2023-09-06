// DP - Top Down
// Hash map - Memoization
// Time O(N) | Space O(N)
// https://leetcode.com/problems/house-robber/

const rob = function(nums) {
    const memo = new Map();
    
    const recursive = (nums, i) => {
        const isBaseCase = i < 0
        if(isBaseCase) return 0
        
        if(memo.has(i)) return memo.get(i)
        
        const oneStep = recursive(nums, i - 1) 
        const twoSteps = recursive(nums, i - 2) + nums[i]
        memo.set(i, memo.get(i) + Math.max(oneStep, twoSteps) || Math.max(oneStep, twoSteps))
        
        return memo.get(i)
    }
    
    return recursive(nums, nums.length - 1)
};
