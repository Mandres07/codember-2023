const initialValue = 0;

const operators = {
   "#": (input: number, res: string): [number, string] => {
      input++;
      return [input, res];
   },
   "@": (input: number, res: string): [number, string] => {
      input--;
      return [input, res]
   },
   "*": (input: number, res: string): [number, string] => [input * input, res],
   "&": (input: number, res: string): [number, string] => [input, res + input.toString()]
}

const inputs = [
   '##*&',
   '&##&*&@&',
   '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&'
];

function calculateResult(input: string): string {
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