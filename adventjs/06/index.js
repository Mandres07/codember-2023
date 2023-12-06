function maxDistance(movements) {
    // Code here
    const moves = movements.split('');
    const countLeft = moves.filter(m => m === '<').length;
    const countRight = moves.filter(m => m === '>').length;
    let result = 0;
    const operations = {
        '<': (result) => result - 1,
        '>': (result) => result + 1,
        '*': (result) => result + (countLeft >= countRight ? -1 : +1)
    };
    for (let c of movements) {
        result = operations[c](result);
    }
    return Math.abs(result);
}
const movements = '>>*<';
const result = maxDistance(movements);
console.log(result); // -> 2
const movements2 = '<<<>';
const result2 = maxDistance(movements2);
console.log(result2); // -> 2
const movements3 = '>***>';
const result3 = maxDistance(movements3);
console.log(result3); // -> 5
