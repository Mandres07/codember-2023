function cyberReindeer(road, time) {
    const ROAD = '.', OPEN = '*', CLOSED = '|', SANTA = 'S', STEPS_TO_OPEN = 4;
    const result = [road];
    let currentRoad = road.split('');
    let actualIndex = 1;
    const getPrevious = (index) => {
        if ([SANTA, ROAD].includes(road[index - 1]))
            return ROAD;
        return OPEN;
    };
    for (let i = 1; i < time; i++) {
        if ([ROAD, OPEN].includes(road[actualIndex])) {
            currentRoad[actualIndex] = SANTA;
            currentRoad[actualIndex - 1] = getPrevious(actualIndex);
            actualIndex++;
        }
        result.push(currentRoad.join(''));
        if (i === STEPS_TO_OPEN) {
            road = road.replaceAll(CLOSED, OPEN);
            currentRoad = currentRoad.map(r => r === CLOSED ? OPEN : r);
        }
    }
    return result;
}
const road = 'S..|...|..';
const time = 10; // units of time
const res = cyberReindeer(road, time);
console.log(res);
/* -> result:
[
  'S..|...|..', // initial state
  '.S.|...|..', // sled advances on the road
  '..S|...|..', // sled advances on the road
  '..S|...|..', // sled stops at the barrier
  '..S|...|..', // sled stops at the barrier
  '...S...*..', // barrier opens, sled advances
  '...*S..*..', // sled advances on the road
  '...*.S.*..', // sled advances on the road
  '...*..S*..', // sled advances on the road
  '...*...S..', // passes through the open barrier
]
*/ 
