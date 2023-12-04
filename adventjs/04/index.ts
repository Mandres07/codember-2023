// In 🎅 Santa's workshop, some Christmas messages have been written in a peculiar way: 
// the words within the brackets must be read backwards.

// Santa needs these messages to be correctly formatted. 
// Your task is to write a function that takes a string and reverses the characters within each pair of parentheses, 
// removing the parentheses as well.
// However, bear in mind that there may be nested parentheses, 
// so you should reverse the characters in the correct order.

function removeParenthesis(message: string): string {
    return message.split('').filter(c => c !== '(' && c !== ')').join('');
}

function decodeString(message: string): string {
    let start: number | null = null;
    let end: number | null = null;
    for (let i = 0; i < message.length; i++) {
        if (message[i] === '(')
            start = i;
        else if (message[i] === ')')
            end = i;

        if (start !== null && end !== null)
            break;
    }
    if (start !== null && end !== null) {
        const toReplace = message.substring(start, end + 1);
        const newValue = removeParenthesis(toReplace.split('').reverse().join(''));
        const newMessage = message.replace(toReplace, newValue);
        return newMessage;
    }
    return message;
}

function decode(message: string): string {
    // Code here
    while (message.includes('(')) {
        message = decodeString(message);
    }
    return message;
}

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

const re = decodeString('(oiraM)');
console.log(re);