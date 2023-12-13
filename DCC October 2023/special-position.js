const numSpecial = (mat, ans = 0) => {
    
    //get sum totals for values in rows and in columns
    const rowSum = mat.map(row => row.reduce((a,b) => a+b, 0));
    const colSum = Array(mat[0].length).fill(0);
    for (let i = 0; i < mat.length; i++)
        for (let j = 0; j < mat[0].length; j++)
            colSum[j] += mat[i][j];
    
    //find 1 cells where the row and column sums are both 1
    for (let i = 0; i < mat.length; i++)
        for (let j = 0; j < mat[0].length; j++)
            if (mat[i][j] === 1 && colSum[j] === 1 && rowSum[i] === 1)
                ans++;
    
    return ans;            
};