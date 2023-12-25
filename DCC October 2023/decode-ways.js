const numDecodings = function(s) {
    const memo = new Map();
    let result = 0
    
    const recursive = (index) => {
        const isBaseCase = s.length <= index
        if(isBaseCase) return 1
        
        if(memo.has(index)) return memo.get(index)
        
        if(s[index] > 0){
            result = result + recursive(index + 1)
        }
        
        if(s[index] != 0 && index < s.length - 1 && s[index] + s[index + 1] < 27){
            result = result + recursive(index + 2)
        }
        
        memo.set(index, result)
        
        return memo.get(index)
    }
    
    return recursive(0)
};