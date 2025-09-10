import { hello } from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

hello();

const today = dayjs();

const deliveryDate = today.add(7, 'days');

console.log(deliveryDate.format('dddd, MMMM D'));