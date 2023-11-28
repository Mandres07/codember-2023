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
        const [value, key] = line.split('-');
        const chars = key.split('');
        if (chars.every(i => isUnique(value, i))) {
            valids.push({ value, key });
        }

    }
    console.table(valids);
}

function isUnique(str, char) {
    return str.split(char).length === 2;
}

processLineByLine();
