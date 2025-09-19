import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

export const deliveryOptions = [{
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

export const calculateDeliveryDate = (deliveryOption)=>{
    const today = dayjs();

    let abcd = deliveryOption.days;

    let deliveryDate =  today.add(abcd, 'days').format('dddd') === 'Saturday' ? today.add(abcd + 2, 'days') : 
                        today.add(abcd, 'days').format('dddd') === 'Sunday' ? today.add(abcd + 1, 'days') : today.add(abcd, 'days');

    // let deliveryDay = deliveryDate.format('dddd');

    const dateString = deliveryDate.format('dddd, MMMM D');

    return dateString;









    // const dateString = deliveryDate.format('dddd, MMMM D');

    // return dateString;
}