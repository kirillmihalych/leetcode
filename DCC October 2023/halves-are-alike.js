var halvesAreAlike = function(s) {
    let count = 0, len = s.length
    let vowels = "aeiouAEIOU"
    for(let i=0; i<len; i++){
        if(i < len/2){
            if(vowels.includes(s[i]))    
                count++
        }
        else{
            if(vowels.includes(s[i]))    
                count--
        }  
    }
    return count == 0;
};