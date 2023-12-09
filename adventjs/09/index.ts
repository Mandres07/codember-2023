function adjustLights(lights: string[]) {
   let result = 0;
   const even = lights[0];
   const odd = even === '🟢' ? '🔴' : '🟢';
   for (let i = 0; i < lights.length; i++) {
      const isEven = i % 2 === 0;
      if (isEven && lights[i] !== even)
         result++;
      else if (!isEven && lights[i] !== odd)
         result++;
   }
   let result2 = 0;
   for (let i = 0; i < lights.length; i++) {
      const isEven = i % 2 === 0;
      if (isEven && lights[i] !== odd)
         result2++;
      else if (!isEven && lights[i] !== even)
         result2++;
   }
   return Math.min(result, result2);
}

console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']));
// -> 1 (you change the fourth light to 🔴)

console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']));
// -> 2 (you change the second light to 🟢 and the third to 🔴)

console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']));
// -> 0 (they are already alternating)

console.log(adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢']));
// -> 1 (you change the second light to 🟢)
