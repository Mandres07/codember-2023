// In 🎅 Santa's workshop, some Christmas messages have been written in a peculiar way: 
// the words within the brackets must be read backwards.
// Santa needs these messages to be correctly formatted. 
// Your task is to write a function that takes a string and reverses the characters within each pair of parentheses, 
// removing the parentheses as well.
// However, bear in mind that there may be nested parentheses, 
// so you should reverse the characters in the correct order.
function decode(message) {
    const removeParenthesis = (msg) => {
        return msg.replace('(', '').replace(')', '');
    };
    const decodeString = (msg) => {
        let start = null;
        let end = null;
        for (let i = 0; i < msg.length; i++) {
            if (msg[i] === '(')
                start = i;
            else if (msg[i] === ')')
                end = i;
            if (start !== null && end !== null) {
                const toReplace = msg.substring(start, end + 1);
                const newValue = toReplace.split('').reverse().join('');
                const newValueF = removeParenthesis(newValue);
                const newMessage = msg.replace(toReplace, newValueF);
                return newMessage;
            }
        }
        return msg;
    };
    while (message.includes('(')) {
        message = decodeString(message);
    }
    return message;
}
const a = decode('hola (odnum)');
console.log(a); // hola mundo
const b = decode('(olleh) (dlrow)!');
console.log(b); // hello world!
const c = decode('sa(u(cla)atn)s');
console.log(c); // santaclaus
const re = decode('(oiraM)');
console.log(re);
