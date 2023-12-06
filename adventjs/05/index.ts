function cyberReindeer(road: string, time: number) {
    const result: string[] = [];
    const realRoad = road.replace('S', '.');
    let path = realRoad.split('');
    let position = 0;
    for (let i = 0; i < time; i++) {
        let moment = [...path];
        if (['.', '*'].includes(path[position])) {
            moment[position] = 'S';
            result.push(moment.join(''));
            position++;
        } else {
            moment[position - 1] = 'S';
            result.push(moment.join(''));
        }
        if (i === 4)
            path = realRoad.replaceAll('|','*').split('');
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