var restoreArray = function(adjacentPairs) {
    const map = new Map();
    
    for (const [num1, num2] of adjacentPairs) {; // Map the neighbor for each number. It is symmetric.
        if (!map.has(num1)) map.set(num1, new Set());
        map.get(num1).add(num2);
        
         if (!map.has(num2)) map.set(num2, new Set());
        map.get(num2).add(num1);
    }
    
    let endNum;
    
    for (const [num, neis] of map) {
        if (neis.size === 1) {
            endNum = num;
            break;
        }
    }
    
    const m = map.size;
    const res = [];
    
    res[0] = endNum; // the first or last num in the resulting array will only have 1 neighbor. That is where we will start from.
    
    for (let i = 1; i < m; i++) {
        const prevNum = res[i - 1];
        
        const neis = map.get(prevNum);
        
        for (const nei of neis) { // we are going to iterate only once
            res[i] = nei;
            map.get(nei).delete(prevNum);
        }
        map.delete(prevNum);
    }
    
    return res;
};