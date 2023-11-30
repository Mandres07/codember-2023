const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
    const fileStream = fs.createReadStream('file.txt');
    const invalids = [];

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    for await (const line of rl) {
        const [id, username, email, age, location] = line.split(',');
        if (id === null || id === '' || !id.match(/^[a-z0-9]+$/i)) {
            invalids.push(username);
            continue;
        }
        if (username === null || username === '' || !username.match(/^[a-z0-9]+$/i)) {
            invalids.push(username);
            continue;
        }
        if (email === null || email === '' || !email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            invalids.push(username);
            continue;
        }
        if (isNaN(age)) {
            invalids.push(username);
            continue;
        }
        if (typeof location !== 'string') {
            invalids.push(username);
            continue;
        }
    }
    const chars = invalids.map(i => i[0]);
    console.table(invalids);
    console.table(chars.join(''));
}

processLineByLine();
