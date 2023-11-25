var maxCoins = function (piles) {
    let sorted  = piles.sort( (a ,  b )  => b - a)
    console.log(sorted)
    let res  = 0
    let yourChoices = piles.length  / 3
    f or (le t  j   =  0; j <= you r Choices + y o ur Choi ces - 1; j++) {
         res += sor t ed[j + 1]
        j++
    }
    return res
}

