function distributeGifts(weights: number[][]) {
    const result = weights.map((currentRow, rIndex, columnArr) => {

        const isDefined = (value: number[] | number): boolean => {
            return value !== undefined && value !== null;
        }

        const row = currentRow.map((column, cIndex, rowArr) => {
            let sum = 0, count = 0;
            if (column !== null) {
                sum += column;
                count++;
            }
            const previousRow = columnArr[rIndex - 1];
            const nextRow = columnArr[rIndex + 1];
            const previousColumn = rowArr[cIndex - 1]
            const nextColumn = rowArr[cIndex + 1];
            if (isDefined(previousRow)) {
                if (isDefined(previousRow[cIndex])) {
                    sum += previousRow[cIndex];
                    count++;
                }
            }
            if (isDefined(nextRow)) {
                if (isDefined(nextRow[cIndex])) {
                    sum += nextRow[cIndex];
                    count++;
                }
            }
            if (isDefined(previousColumn)) {
                sum += previousColumn;
                count++;
            }
            if (isDefined(nextColumn)) {
                sum += nextColumn;
                count++;
            }
            return Math.round(sum / count);
        });
        return row;
    });
    return result;
}

const input = [
    [4, 5, 1],
    [6, null, 3],
    [8, null, 4]
]

console.log(distributeGifts(input));

