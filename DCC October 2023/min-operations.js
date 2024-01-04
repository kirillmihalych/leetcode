var minOperations = function(nums) {
    const count = {};
    let op = 0;
    
    for(let nn of nums) {
        count[nn] = (count[nn] || 0) + 1;
    }
    
    for(let [key, val] of Object.entries(count)) {
      if(val === 1) {
          return -1;
      }
      let vr = Math.floor(val / 3);
      let rem = val % 3;
      if(rem > 0) {
          vr++;
      }
      op += vr;
    }
    return op;
};