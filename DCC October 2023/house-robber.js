const rob = function(nums) {
    const memo = new Map();
    
    const recursive = (index) => {
        const isBaseCase = nums.length <= index
        if(isBaseCase) return 0
        
        if(memo.has(index)) return memo.get(index)
        
        const leftHouse = nums[index]
        const midHouse = recursive(index + 1)
        const rightHouse = recursive(index + 2)
        const twoHouses = leftHouse + rightHouse
        
        memo.set(index, memo.get(index) + Math.max(twoHouses, midHouse) ||Math.max(twoHouses, midHouse))
        
        return memo.get(index)
    }
    
    return recursive(0)
};