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
      [current, result] = operators[c](current, result);
   }
   return result;
}

inputs.forEach(input => console.log(calculateResult(input)));