/*--- Imports ---*/
import { cart, updateCartNumFunc, deleteFromCart, updateItemQuantity } from './cart.js';
import { productsInfo } from '../data/products.js';
import { deliveryOptions } from '../data/deliveryOptions.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

const productContainer = document.querySelector('.js-order-summary');
const checkoutNumElem = document.querySelector('.js-checkout-quantity');

const deliveryOptionsHTML = (productId, item)=>{

    let html = ``;

    deliveryOptions.forEach((option)=>{
        const today = dayjs();

        const deliveryDate = today.add(option.deliveryDays, 'days');

        const deliveryDateSring = deliveryDate.format('dddd, MMMM D');

        const deliveryPrice = option.priceCents === 0 ? 'FREE' : (option.priceCents / 100).toFixed(2);

        const isChecked = option.id === item.deliveryOptionId

        html += `
        
        <div class="delivery-option">
            <input type="radio"
            ${isChecked ? 'checked' : ''}
            class="delivery-option-input"
            name="${productId}">
            <div>
                <div class="delivery-option-date">
                    ${deliveryDateSring}
                </div>
                <div class="delivery-option-price">
                    $${deliveryPrice} - Shipping
                </div>
            </div>
        </div>
        `
    })
    return html;
}

let html = ``;
cart.forEach((item)=>{
    const productId = item.productId;

    let matchedItem;
    productsInfo.forEach((catoItem)=>{
        if(productId === catoItem.id){
            matchedItem = catoItem;
        }
    })

    html += `
    <div class="cart-item-container js-item-container-${item.productId}" >
        <div class="delivery-date">
            Delivery date: Tuesday, June 21
        </div>

        <div class="cart-item-details-grid">
            <img class="product-image" src="${matchedItem.image}">

            <div class="cart-item-details">
                <div class="product-name">
                    ${matchedItem.name}
                </div>
                <div class="product-price">
                    $${(matchedItem.priceCents / 100).toFixed(2)}
                </div>
                <div class="product-quantity">
                    <span>Quantity: <span class="quantity-label js-item-quantity-${item.productId}">${item.quantity}</span></span>

                    <span class="update-quantity-link link-primary js-update-link" data-product-id = "${item.productId}">Update</span>

                    <input type="number" name="update-quantity" class = "quantity-input js-input-quantity js-input-quantity-${item.productId}" data-product-id = "${item.productId}">
                    
                    <span class="save-quantity-link link-primary js-save-link" data-product-id = "${item.productId}">Save</span>

                    <span class="delete-quantity-link link-primary js-delete-link" data-product-id = "${item.productId}">Delete</span>
                </div>
            </div>

            <div class="delivery-options">
                <div class="delivery-options-title">
                    Choose a delivery option:
                </div>
                
                ${deliveryOptionsHTML(productId, item)}

            </div>
        </div>
    </div>
    `
})

productContainer.innerHTML = html;




const checkoutQuantityUpdate = (productId)=>{
    const itemContainer = document.querySelector(`.js-item-container-${productId}`);

    itemContainer.classList.remove('is-editing-quantity');

    const newQuantity = +document.querySelector(`.js-input-quantity-${productId}`).value;

    updateItemQuantity(productId, newQuantity);

    const itemQuantity = document.querySelector(`.js-item-quantity-${productId}`);

    let abcd = 0;

    cart.forEach((item)=>{
        if(item.productId === productId){
            abcd = item.quantity;
        }
    })

    itemQuantity.innerText = abcd;
    checkoutNumElem.innerText = `${updateCartNumFunc()} Items`;
}



checkoutNumElem.innerText = `${updateCartNumFunc()} Items`

document.querySelectorAll('.js-delete-link').forEach((link)=>{
    link.addEventListener('click', ()=>{

        const productId = link.dataset.productId;

        deleteFromCart(productId);
       
        const itemContainer = document.querySelector(`.js-item-container-${productId}`);

        itemContainer.remove();

        checkoutNumElem.innerText = `${updateCartNumFunc()} Items`

    })
})

document.querySelectorAll('.js-update-link').forEach((link)=>{
    link.addEventListener('click', ()=>{
        const productId = link.dataset.productId;

        const itemContainer = document.querySelector(`.js-item-container-${productId}`)

        itemContainer.classList.add('is-editing-quantity');
    })
})

document.querySelectorAll(`.js-save-link`).forEach((link)=>{
    link.addEventListener('click', ()=>{
        
        const productId = link.dataset.productId;

        checkoutQuantityUpdate(productId);

    })
})

document.querySelectorAll('.js-input-quantity').forEach((link)=>{
    link.addEventListener('keydown', (e)=>{
        const productId = link.dataset.productId;

        if(e.key === 'Enter'){
            checkoutQuantityUpdate(productId);
        }

    })


})