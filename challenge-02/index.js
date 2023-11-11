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
        [current, result] = operators[c](current, result);
    }
    return result;
}
inputs.forEach(input => console.log(calculateResult(input)));
//# sourceMappingURL=index.js.map