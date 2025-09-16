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

    const deliveryDate = today.add(deliveryOption.days, 'days');

    const dateString = deliveryDate.format('dddd, MMMM D');

    return dateString;
}