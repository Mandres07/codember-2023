function maxDistance(movements: string): number {
    const moves = movements.split('');
    const countLeft = moves.filter(m => m === '<').length;
    const countRight = moves.filter(m => m === '>').length;
    let result = 0;

    for (let c of movements) {
        if (c === '<')
            result--;
        else if (c === '>')
            result++;
        else
            result = result + (countLeft >= countRight ? -1 : +1);
    }
    return Math.abs(result);
}

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5