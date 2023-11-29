 var hammingWeight = function(n) {
    let [ bits, mask ] = [ 0, 1 ]
    
    for (let i = 0; i < 32; i++) {
        const hasBit = ((n & mask) !== 0)
        if (hasBit) bits++
        
        mask <<= 1
    }
    
    return bits
};