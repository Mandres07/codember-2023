function cyberReindeer(road: string, time: number) {
    const ROAD = '.', OPEN = '*', CLOSED = '|', SANTA = 'S';

    const getPrevious = (index: number): string => {
        switch (road[index - 1]) {
            case SANTA:
            case ROAD:
                return ROAD;
            case OPEN:
            case CLOSED:
                return OPEN;
            default:
                return ROAD;
        }
    }
    const result: string[] = [road];
    let currentRoad = road.split('');
    let actualIndex = 1;
    for (let i = 1; i < time; i++) {
        switch (road[actualIndex]) {
            case ROAD:
            case OPEN:
                currentRoad[actualIndex] = SANTA;
                if (road[actualIndex - 1] !== undefined) {
                    currentRoad[actualIndex - 1] = getPrevious(actualIndex);
                }
                actualIndex++;
                break;
            case CLOSED:
                break;
            default:
                break;
        }
        result.push(currentRoad.join(''));
        if (i === 4 && road.includes(CLOSED)) {
            road = road.replaceAll(CLOSED, OPEN);
            currentRoad = currentRoad.map(r => r === CLOSED ? OPEN : r);
        }
    }
    return result;
}

const road = 'S..|...|..'
const time = 10 // units of time
const res = cyberReindeer(road, time)
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