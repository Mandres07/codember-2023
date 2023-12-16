function autonomousDrive(store: string[], movements: string[]) {
   const row = store.findIndex(s => s.includes('!'));
   const column = store[row].indexOf('!');
   const position = { row, col: column };
   const updatedRow = store[row].replace('!', '.');
   store[row] = updatedRow;
   for (const move of movements) {
      if (move === 'R') {
         const ev = store[position.row][position.col + 1];
         if (ev != undefined && ev === '.') {
            position.col = position.col + 1;
         }
      }
      else if (move === 'L') {
         const ev = store[position.row][position.col - 1];
         if (ev != undefined && ev === '.') {
            position.col = position.col - 1;
         }
      }
      else if (move === 'U') {
         const ev = store[position.row - 1];
         if (ev != undefined && ev[position.col] === '.') {
            position.row = position.row - 1;
         }
      }
      else {
         const ev = store[position.row + 1];
         if (ev != undefined && ev[position.col] === '.') {
            position.row = position.row + 1;
         }
      }
   }
   const temp = store[position.row].split('');
   temp[position.col] = '!';
   store[position.row] = temp.join('');
   return store;
}

const s = ['..!....', '...*.*.'];

const m = ['R', 'R', 'D', 'L'];
const res1 = autonomousDrive(s, m);
console.log(res1)

console.log(autonomousDrive([
   '..!....',
   '......*'
],
   ['R', 'D', 'L']))

console.log(autonomousDrive(['..!....'], ['R', 'L']));
/*
[
  ".......",
  "...*!*."
]
*/

// The last movement is to the left, but it cannot move because there is an obstacle.