function calculateTime(deliveries: string[]) {
    let currentDate = new Date();
    const limitDate = new Date();
    currentDate.setHours(0, 0, 0);
    limitDate.setHours(7, 0, 0);
    let hoursToAdd = 0, minutesToAdd = 0, secondsToAdd = 0;
    deliveries.forEach(delivery => {
        const [h, m, s] = delivery.split(':');
        hoursToAdd += +h;
        minutesToAdd += +m;
        secondsToAdd += +s;
    });
    const cTime = currentDate.getTime();
    let msToAdd = 0;
    msToAdd += hoursToAdd * 60 * 60 * 1000;
    msToAdd += minutesToAdd * 60 * 1000;
    msToAdd += secondsToAdd * 1000;
    const finalDate = new Date(cTime + msToAdd);
    const timeDifference = finalDate.getTime() - limitDate.getTime();
    const s = Math.floor((timeDifference % (1000 * 60)) / 1000);
    let m = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    let h = Math.floor(timeDifference / (1000 * 60 * 60));
    let sign = '';
    if (m < 0) {
        h++;
    }
    if (s < 0) {
        m++;
    }
    if (h < 0 || m < 0 || s < 0) {
        sign = '-';
    }
    const hours = Math.abs(h).toString().padStart(2, '0');
    const minutes = Math.abs(m).toString().padStart(2, '0');
    const seconds = Math.abs(s).toString().padStart(2, '0');
    return `${sign}${hours}:${minutes}:${seconds}`;
}

console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00']));
// '-02:20:00'

console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00']));
// '00:30:00'

console.log(calculateTime([
    '00:45:00',
    '00:45:00',
    '00:00:30',
    '00:00:30'
]));
// '-05:29:00'

console.log(calculateTime(['01:01:01', '09:59:59', '01:01:01']));
// "05:02:01"

console.log(calculateTime(['01:00:00', '05:00:00', '00:30:00']));
// "-00:30:00"

console.log(calculateTime(['01:01:01', '03:59:59', '01:01:01', '00:57:58']));
// "-00:00:01"