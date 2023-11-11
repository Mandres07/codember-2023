const initialValue = 0;
const operators = {
    "#": (input, res) => {
        input++;
        return [input, res];
    },
    "@": (input, res) => {
        input--;
        return [input, res];
    },
    "*": (input, res) => [input * input, res],
    "&": (input, res) => [input, res + input.toString()]
};
const inputs = [
    '##*&',
    '&##&*&@&',
    '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&'
];
function calculateResult(input) {
    let current = initialValue;
    let result = '';
    for (const c of input) {
        const [cu, r] = operators[c](current, result);
        current = cu;
        result = r;
    }
    return result;
}
console.log(calculateResult(inputs[0]));
console.log(calculateResult(inputs[1]));
console.log(calculateResult(inputs[2]));
//# sourceMappingURL=index.js.map