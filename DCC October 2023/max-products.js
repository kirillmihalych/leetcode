var maxProduct = function(nums) {
    var ans = 0;
    for (var k = 0; k < nums.length; k++) {
        for (var j = 0; j < nums.length; j++) {
            if (k !== j && ans < (nums[k]-1)*(nums[j]-1)) {
                ans = (nums[k]-1)*(nums[j]-1)
            }
        }
    }
    return ans;
};