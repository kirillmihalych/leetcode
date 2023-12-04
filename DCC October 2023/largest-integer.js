var largestGoodInteger = function(num) {
    for(let q=9;q>=0;q--){
        let st=(''+q).repeat(3)
        if(num.indexOf(st) !=-1)return st
    }
    return ''
};