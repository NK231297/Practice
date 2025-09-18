import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import satSunFunc from './utils/is-weekend.js';
/*
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
*/


const deliveryOptions = [{
    id: '1',
    priceCents: 0,
    days: 7
}, {
    id: '2',
    priceCents: 499,
    days: 3
}, {
    id: '3',
    priceCents: 999,
    days: 1
}];

console.log(dayjs());
deliveryOptions.forEach((deliveryOption)=>{
    const today = dayjs();

    let abcd = deliveryOption.days;

    let deliveryDate = today.add(abcd, 'days').format('dddd');

    // let deliveryDay = deliveryDate;

    
    console.log(deliveryDate);









    // const dateString = deliveryDate.format('dddd, MMMM D');

    // return dateString;
})