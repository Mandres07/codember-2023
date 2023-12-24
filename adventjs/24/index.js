function getStaircasePaths(steps, maxJump) {
    const result = [];
    function generateCombinations(currentCombination, remainingSteps) {
        if (remainingSteps === 0) {
            result.push(currentCombination.slice());
            return;
        }
        for (let stepSize = 1; stepSize <= Math.min(maxJump, remainingSteps); stepSize++) {
            currentCombination.push(stepSize);
            generateCombinations(currentCombination, remainingSteps - stepSize);
            currentCombination.pop();
        }
    }
    generateCombinations([], steps);
    return result;
}
// console.log(getStaircasePaths(2, 1)) // [[1, 1]]
// console.log(getStaircasePaths(3, 3)) // [[1, 1, 1], [1, 2], [2, 1], [3]]
console.log(getStaircasePaths(5, 1)); // [[1, 1, 1, 1, 1]]
console.log(getStaircasePaths(5, 2));
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
