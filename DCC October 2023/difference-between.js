var onesMinusZeros = function(grid) {
     const m = grid.length;
    const n = grid[0].length;

    const onesRow = new Array(m).fill(0);
    const onesCol = new Array(n).fill(0);
    const zerosRow = new Array(m).fill(0);
    const zerosCol = new Array(n).fill(0);

    // Calculate onesRow, onesCol, zerosRow, and zerosCol
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            onesRow[i] += grid[i][j];
            onesCol[j] += grid[i][j];
            zerosRow[i] += 1 - grid[i][j];
            zerosCol[j] += 1 - grid[i][j];
        }
    }

    // Calculate the difference matrix
    const diff = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            diff[i][j] = onesRow[i] + onesCol[j] - zerosRow[i] - zerosCol[j];
        }
    }

    return diff;
};