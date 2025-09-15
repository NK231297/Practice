import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

const today = dayjs();

const futureDate5 = today.add(5, 'days');
const futureDate1Month = today.add(1, 'month');

const dateString5 = futureDate5.format('MMMM-D');
const dateString1Month = futureDate1Month.format('MMMM-D');

console.log(dateString5);
console.log(dateString1Month);