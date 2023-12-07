var largestOddNumber = function(num) {
    if(+num.slice(num.length-1, num.length)%2==1) return num;
    for(let i = num.length-1; i>0; i--){
      if(+num.slice(i-1,i)%2===1) return num.slice(0,i)
    }
    return "";
};