const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
    const fileStream = fs.createReadStream('file.txt');
    const valids = [];

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    for await (const line of rl) {
        var [key, value] = line.split(': ');
        var [amounts, char] = key.split(' ');
        var [min, max] = amounts.split('-');

        var occurrences = value.split(char).length - 1;
        if (occurrences >= +min && occurrences <= +max) {
            valids.push({ key, value, valid: true });
        } else {
            valids.push({ key, value, valid: false })
        }
    }

    console.table(valids);
    console.table(valids.filter(i => i.valid));
    console.table(valids.filter(i => !i.valid))
}

processLineByLine();
