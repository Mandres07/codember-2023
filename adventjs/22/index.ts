// +: Increments the counter value by 1.
// *: Multiplies the counter value by 2.
// -: Subtracts 1 from the counter value.
// %: Mark a return point. Does not modify the counter.
// <: Go back once to the last instruction with the % symbol it has seen. If there is no previous %, it does nothing.
// ¿: Starts a conditional block that executes if the counter is greater than 0.
// ?: Ends a conditional block.

function compile(code: string) {
   let returns: number = null;
   const seen: number[] = [];

   const operators = {
      '+': (count: number, index: number) => {
         count = count + 1;
         return { count, index };
      },
      '*': (count: number, index: number) => {
         count = count * 2;
         return { count, index };
      },
      '-': (count: number, index: number) => {
         count = count - 1;
         return { count, index };
      },
      '%': (count: number, index: number) => {
         returns = index;
         return { count, index };
      },
      '<': (count: number, index: number) => {
         if (seen.includes(index)) {
            return { count, index };
         }
         if (returns !== null) {
            index = returns;
            returns = null;
            seen.push(index);
         }
         return { count, index };
      },
      '¿': (count: number, index: number) => {
         if (counter > 0) {
            return { count, index };
         } else {
            index = code.indexOf('?', index);
            return { count, index };
         }
      },
      '?': (count: number, index: number) => {
         return { count, index };
      },
   }
   let counter = 0;

   for (let i = 0; i < code.length; i++) {
      const { count, index } = operators[code[i]](counter, i);
      counter = count;
      i = index;
   }
   return counter;
}

console.log(
   compile('<%+¿++%++<?'),
   compile('--¿+++?+++¿--?')
   // compile('++*-') ,// 3,
   // // (1 + 1) * 2 - 1 = 3

   // compile('++%++<'),// 6
   // // // 1 + 1 + 1 + 1 + 1 + 1 = 6

   // compile('++<--'), // 0
   // // // 1 + 1 - 1 - 1 = 0

   // compile('++¿+?') ,// 3
   // // // 1 + 1 + 1 = 3

   // compile('--¿+++?'), // -2
   // - 1 - 1 = -2
   // compile('-+¿+?'),
   //  compile('++%++<'),
   //  compile('++%++<++¿*?'),
   //  compile('--¿+++?'),
   //  compile('--¿+++?+++¿--?'),
);