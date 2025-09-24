import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import { formatMoney } from './money.js';
import { cart } from '../cart.js';

export const deliveryOptions = [{
    id: '1',
    days: 7,
    priceCents: 0
}, {
    id: '2',
    days: 3,
    priceCents: 499
}, {
    id: '3',
    days: 1,
    priceCents: 999
}];

export function getDateString(days){
    const today = dayjs();

    const deliveryDate = today.add(days, 'days');

    const dateString = deliveryDate.format('dddd, MMMM D');

    return dateString;
};

export function calculateDeliveryDate(cartItem){
    let date;
    deliveryOptions.forEach((option)=>{
        if(option.id === cartItem.deliveryOptionId){
            date = getDateString(option.days);
        }
    })
    return date;
}

export function getDeliveryOptionById(deliveryOptionId){
    let selectedOption;
    deliveryOptions.forEach((option)=>{
        if(deliveryOptionId === option.id){
            selectedOption = option;
        }
    })
    return selectedOption;
}

export function renderDeliveryOptions(productId, deliveryOptionId){
    let html = '';
    
    deliveryOptions.forEach((option)=>{
        
        const priceString = option.priceCents === 0 ? 'FREE Shipping' : `$${formatMoney(option.priceCents)} - Shipping`;
        

        html += `
            <div class="delivery-option js-delivery-option" data-product-id = "${productId}" data-delivery-id = "${option.id}">
                <input type="radio"
                ${deliveryOptionId === option.id ? 'checked' : ''}
                class="delivery-option-input"
                name="${productId}">
                <div>
                <div class="delivery-option-date">
                    ${getDateString(option.days)}
                </div>
                <div class="delivery-option-price">
                    ${priceString}
                </div>
                </div>
            </div>
        `
    })
    return html;
};

