function revealSabotage(store) {
    const response = store;
    for (let r = 0; r < store.length; r++) {
        const row = [...store[r]];
        for (let c = 0; c < row.length; c++) {
            if (row[c] === '*') {
                continue;
            }
            let bombs = 0;
            if (store[r - 1] !== undefined) {
                if (store[r - 1][c - 1] !== undefined && store[r - 1][c - 1] === '*') {
                    bombs++;
                }
                if (store[r - 1][c] !== undefined && store[r - 1][c] === '*') {
                    bombs++;
                }
                if (store[r - 1][c + 1] !== undefined && store[r - 1][c + 1] === '*') {
                    bombs++;
                }
            }
            if (store[r][c - 1] !== undefined && store[r][c - 1] === '*') {
                bombs++;
            }
            if (store[r][c] !== undefined && store[r][c] === '*') {
                bombs++;
            }
            if (store[r][c + 1] !== undefined && store[r][c + 1] === '*') {
                bombs++;
            }
            if (store[r + 1] !== undefined) {
                if (store[r + 1][c - 1] !== undefined && store[r + 1][c - 1] === '*') {
                    bombs++;
                }
                if (store[r + 1][c] !== undefined && store[r + 1][c] === '*') {
                    bombs++;
                }
                if (store[r + 1][c + 1] !== undefined && store[r + 1][c + 1] === '*') {
                    bombs++;
                }
            }
            row[c] = bombs > 0 ? bombs.toString() : ' ';
        }
        response[r] = [...row];
    }
    console.log(response);
    return response;
}
const store = [
    ['*', ' ', ' ', ' '],
    [' ', ' ', '*', ' '],
    [' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ']
];
console.log(revealSabotage(store));
/* Should display:
[
    ['*', '2', '1', '1'],
    ['1', '2', '*', '1'],
    ['1', '2', '1', '1'],
    ['*', '1', ' ', ' ']
]
*/ 
