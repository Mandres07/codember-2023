function distributeGifts(weights: number[][]) {
    const response = [...weights];
    for (let r = 0; r < weights.length; r++) {
        const row = [...weights[r]];
        for (let c = 0; c < row.length; c++) {
            let sum = 0;
            let count = 0;
            if (row[c] !== null) {
                sum += row[c];
                count++;
            }
            const previousRow = weights[r - 1];
            const nextRow = weights[r + 1];
            const previousColumn = weights[r][c - 1];
            const nextColumn = weights[r][c + 1];
            if (previousRow !== undefined) {
                if (previousRow[c] !== undefined && previousRow[c] !== null) {
                    sum += previousRow[c];
                    count++;
                }
            }
            if (nextRow !== undefined) {
                if (nextRow[c] !== undefined && nextRow[c] !== null) {
                    sum += nextRow[c];
                    count++;
                }
            }
            if(previousColumn != undefined && previousColumn !== null){
                sum += previousColumn;
                count++;
            }
            if(nextColumn != undefined && nextColumn !== null){
                sum += nextColumn;
                count++;
            }
            row[c] = Math.round(sum / count);
        }
        response[r] = row;
    }
    return response;
}

const input = [
    [4, 5, 1],
    [6, null, 3],
    [8, null, 4]
]

console.log(distributeGifts(input));

