function adjustLights(lights: string[]) {
   const even = lights[0];
   const odd = even === '🟢' ? '🔴' : '🟢';

   const result1 = lights.filter((light, index) => {
      const isEven = index % 2 === 0;
      return (isEven && light !== even) || (!isEven && light !== odd);
   });

   const result2 = lights.filter((light, index) => {
      const isEven = index % 2 === 0;
      return (isEven && light !== odd) || (!isEven && light !== even);
   });

   return Math.min(result1.length, result2.length);
}

console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']));
// -> 1 (you change the fourth light to 🔴)

console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']));
// -> 2 (you change the second light to 🟢 and the third to 🔴)

console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']));
// -> 0 (they are already alternating)

console.log(adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢']));
// -> 1 (you change the second light to 🟢)
