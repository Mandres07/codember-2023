function getStaircasePaths(steps, maxJump) {
   const result: number[][] = [];

   function generate(current: number[], remaining: number): void {
      if (remaining === 0) {
         result.push(current.slice());
         return;
      }
      const minSize = Math.min(maxJump, remaining);
      for (let size = 1; size <= minSize; size++) {
         current.push(size);
         generate(current, remaining - size);
         current.pop();
      }
   }

   generate([], steps);

   return result;
}

// console.log(getStaircasePaths(2, 1)) // [[1, 1]]
// console.log(getStaircasePaths(3, 3)) // [[1, 1, 1], [1, 2], [2, 1], [3]]
console.log(getStaircasePaths(5, 1)) // [[1, 1, 1, 1, 1]]
console.log(getStaircasePaths(5, 2))
/*
[
  [1, 1, 1, 1, 1],
  [1, 1, 1, 2],
  [1, 1, 2, 1],
  [1, 2, 1, 1],
  [1, 2, 2],
  [2, 1, 1, 1],
  [2, 1, 2],
  [2, 2, 1],
]
*/