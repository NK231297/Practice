import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import satSunFunc from './utils/is-weekend.js';

const today = dayjs();

const futureDate5 = today.add(5, 'days');
const futureDate1Month = today.add(1, 'month');
const pastDate1Month = today.subtract(1, 'month');

const dateString5 = futureDate5.format('MMMM-D');
const dateString1Month = futureDate1Month.format('MMMM-D');
const dateString1MonthP = pastDate1Month.format('MMMM-D');
const dateStringDay = futureDate5.format('dddd');

console.log(dateString5);
console.log(dateString1Month);
console.log(dateString1MonthP);
console.log(dateStringDay);

satSunFunc(dateStringDay);