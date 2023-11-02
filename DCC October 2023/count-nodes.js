var averageOfSubtree = function(root) {
    let counter = 0;
    recur(root)
    return counter;
    
    
    // use array to store sum and count at each recursions
    function recur(root) {
        // base case [sum, count] = [0, 0]
        if (!root) return [0, 0]
        
        const left = recur(root.left)
        const right = recur(root.right)
        const sum = root.val + left[0] + right[0]
        const count = 1 + left[1] + right[1]
        
        if (Math.floor(sum/count) === root.val) counter++
        return [sum, count]
    }
};