// In Santa's workshop, a mischievous elf has been playing around with the gift production line, 
// adding or removing an unplanned step.
// You have the original sequence of original manufacturing steps and the modified modified sequence 
// that may include an extra step or be missing a step.
// Your task is to write a function that identifies and returns 
// the first extra step that was added or removed in the manufacturing chain. 
// If there is no difference between the sequences, return an empty string.

function findNaughtyStep(original: string, modified: string) {
   const originalIsBigger = original.length >= modified.length;
   if (originalIsBigger) {
      for (let i = 0; i < original.length; i++) {
         if (modified[i] === undefined)
            return original[i];
         if (original[i] !== modified[i])
            return original[i];
      }
   }
   else {
      for (let i = 0; i < modified.length; i++) {
         if (original[i] === undefined)
            return modified[i];
         if (original[i] !== modified[i])
            return modified[i];
      }
   }
   return '';
}

const original = 'abcd'
const modified = 'abcde'
console.log(findNaughtyStep(original, modified)); // 'e'

const original1 = 'stepfor'
const modified1 = 'stepor'
console.log(findNaughtyStep(original1, modified1)); // 'f'

const original2 = 'abcde'
const modified2 = 'abcde'
console.log(findNaughtyStep(original2, modified2));// ''