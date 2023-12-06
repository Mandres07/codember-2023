// In 🎅 Santa's workshop, some Christmas messages have been written in a peculiar way: 
// the words within the brackets must be read backwards.

// Santa needs these messages to be correctly formatted. 
// Your task is to write a function that takes a string and reverses the characters within each pair of parentheses, 
// removing the parentheses as well.
// However, bear in mind that there may be nested parentheses, 
// so you should reverse the characters in the correct order.

function decode(message: string): string {
    let stack: string[] = [];
    let result = '';
    for (let char of message) {
        if (char === '(') {
            stack.push(result);
            result = '';
        }
        else if (char === ')'){
            const temp = result.split('').reverse();
            result = stack.pop() + temp.join('');
        }
        else
            result += char;
    }
    return result;
}

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

const re = decode('(oiraM)');
console.log(re);