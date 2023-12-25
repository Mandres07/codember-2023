function travelDistance(map: string) {
   const streets = map.split('\n');
   let movements = 0;

   function getLocation(search: string) {
      const street = streets.findIndex(st => st.includes(search));
      if(street === -1){
         return null;
      }
      const house = streets[street].indexOf(search);
      return { street, house };
   }
   
   const santaLocation = getLocation('S');
   for (let i = 1; i <= 9; i++) {
      const childLocation = getLocation(i.toString());
      if(childLocation === null){
         break;
      }
      const y = santaLocation.street - childLocation.street;
      const x = santaLocation.house - childLocation.house;
      movements += Math.abs(y) + Math.abs(x);
      santaLocation.street = childLocation.street;
      santaLocation.house = childLocation.house;
   }

   return movements;
}

const map = `.....1....
..S.......
..........
....3.....
......2...`

console.log(travelDistance(map)) // -> 12 km
/*
From S to kid 1: 4 moves
From kid 1 to 2: 5 moves
From kid 2 to 3: 3 moves
Total: 12 moves
*/

console.log(travelDistance(`..S.1...`)) // -> 2