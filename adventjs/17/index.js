function optimizeIntervals(intervals) {
    const ints = [...intervals];
    ints.sort((a, b) => a[0] - b[0]);
    const res = [];
    console.log(ints);
    for (const int of ints) {
        if (res.length === 0) {
            res.push(int);
            continue;
        }
        const indexFound = res.findIndex(i => i[1] >= int[0]);
        if (indexFound < 0) {
            res.push(int);
        }
        else {
            if (res[indexFound][1] <= int[1]) {
                res[indexFound][1] = int[1];
            }
        }
    }
    console.log(res);
    return [];
}
console.log(optimizeIntervals([
    [5, 8],
    [2, 7],
    [3, 4]
])); // [[2, 8]]
console.log(optimizeIntervals([
    [1, 3],
    [8, 10],
    [2, 6]
])); // [[1, 6], [8, 10]]
console.log(optimizeIntervals([
    [3, 4],
    [1, 2],
    [5, 6]
])); // [[1, 2], [3, 4], [5, 6]]
