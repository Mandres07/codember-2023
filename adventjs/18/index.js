function drawClock(time) {
    const hours = {
        '0': [
            ['*', '*', '*'],
            ['*', ' ', '*'],
            ['*', ' ', '*'],
            ['*', ' ', '*'],
            ['*', ' ', '*'],
            ['*', ' ', '*'],
            ['*', '*', '*'],
        ],
        '1': [
            [' ', ' ', '*'],
            [' ', ' ', '*'],
            [' ', ' ', '*'],
            [' ', ' ', '*'],
            [' ', ' ', '*'],
            [' ', ' ', '*'],
            [' ', ' ', '*'],
        ],
        '2': [
            ['*', '*', '*'],
            [' ', ' ', '*'],
            [' ', ' ', '*'],
            ['*', '*', '*'],
            ['*', ' ', ' '],
            ['*', ' ', ' '],
            ['*', '*', '*'],
        ],
        '3': [
            ['*', '*', '*'],
            [' ', ' ', '*'],
            [' ', ' ', '*'],
            ['*', '*', '*'],
            [' ', ' ', '*'],
            [' ', ' ', '*'],
            ['*', '*', '*'],
        ],
        '4': [
            ['*', ' ', '*'],
            ['*', ' ', '*'],
            ['*', ' ', '*'],
            ['*', '*', '*'],
            [' ', ' ', '*'],
            [' ', ' ', '*'],
            [' ', ' ', '*'],
        ],
        '5': [
            ['*', '*', '*'],
            ['*', ' ', ' '],
            ['*', ' ', ' '],
            ['*', '*', '*'],
            [' ', ' ', '*'],
            [' ', ' ', '*'],
            ['*', '*', '*'],
        ],
        '6': [
            ['*', '*', '*'],
            ['*', ' ', ' '],
            ['*', ' ', ' '],
            ['*', '*', '*'],
            ['*', ' ', '*'],
            ['*', ' ', '*'],
            ['*', '*', '*'],
        ],
        '7': [
            ['*', '*', '*'],
            [' ', ' ', '*'],
            [' ', ' ', '*'],
            [' ', ' ', '*'],
            [' ', ' ', '*'],
            [' ', ' ', '*'],
            [' ', ' ', '*'],
        ],
        '8': [
            ['*', '*', '*'],
            ['*', ' ', '*'],
            ['*', ' ', '*'],
            ['*', '*', '*'],
            ['*', ' ', '*'],
            ['*', ' ', '*'],
            ['*', '*', '*'],
        ],
        '9': [
            ['*', '*', '*'],
            ['*', ' ', '*'],
            ['*', ' ', '*'],
            ['*', '*', '*'],
            [' ', ' ', '*'],
            [' ', ' ', '*'],
            ['*', '*', '*'],
        ],
        ':': [
            [' '],
            [' '],
            ['*'],
            [' '],
            ['*'],
            [' '],
            [' '],
        ]
    };
    const result = [];

    for (let i = 0; i < time.length; i++) {
        const digit = time[i];
        const drawing = hours[digit];
        if (result.length === 0) {
            result.push([...drawing]);
        } else {
            for(let j = 0; j < result[0].length; j++){
                result[0][j] = [...result[0][j], ' ', ...drawing[j]];
            }
        }
    }
    return result[0];
}

console.log(drawClock('01:30'));