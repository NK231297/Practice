import {cart, deleteFromCart, updateCartQuantity} from './cart.js';
import {productsInfo} from '../data/products.js';
import {formatMoney} from './utils/money.js';
import {updateCart} from './utils/updateQuantityOnUI.js';

let html = ``;

cart.forEach((cartItem)=>{

    const productId = cartItem.productId;

    let matchingItem;

    productsInfo.forEach((product)=>{
        if(product.id === productId){
            matchingItem = product
        }
    })

    // console.log(matchingItem);
    
    html += `
    <div class="cart-item-container js-cart-item-${cartItem.productId}">
        <div class="delivery-date">
        Delivery date: Tuesday, June 21
        </div>

        <div class="cart-item-details-grid">
        <img class="product-image"
            src="${matchingItem.image}">

        <div class="cart-item-details">
            <div class="product-name">
            ${matchingItem.name}
            </div>
            <div class="product-price">
            $${formatMoney(matchingItem.priceCents)}
            </div>
            <div class="product-quantity">
            <span>
                Quantity: <span class="quantity-label js-quantity-label-${matchingItem.id}">${cartItem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary js-update-link" data-product-id = "${matchingItem.id}">
                Update
            </span>

            <input type = "number" class = "quantity-input js-input-elem js-input-quantity-${matchingItem.id}"/>

            <span class = "save-quantity-link link-primary js-save-quantity" data-product-id = "${matchingItem.id}"> Save </span>

            <span class="delete-quantity-link link-primary js-delete-link" data-product-id = "${matchingItem.id}">
                Delete
            </span>
            </div>
        </div>

        <div class="delivery-options">
            <div class="delivery-options-title">
            Choose a delivery option:
            </div>
            <div class="delivery-option">
            <input type="radio" checked
                class="delivery-option-input"
                name="delivery-option-${matchingItem.id}">
            <div>
                <div class="delivery-option-date">
                Tuesday, June 21
                </div>
                <div class="delivery-option-price">
                FREE Shipping
                </div>
            </div>
            </div>
            <div class="delivery-option">
            <input type="radio"
                class="delivery-option-input"
                name="delivery-option-${matchingItem.id}">
            <div>
                <div class="delivery-option-date">
                Wednesday, June 15
                </div>
                <div class="delivery-option-price">
                $4.99 - Shipping
                </div>
            </div>
            </div>
            <div class="delivery-option">
            <input type="radio"
                class="delivery-option-input"
                name="delivery-option-${matchingItem.id}">
            <div>
                <div class="delivery-option-date">
                Monday, June 13
                </div>
                <div class="delivery-option-price">
                $9.99 - Shipping
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    `
})

// console.log(html);

document.querySelector('.js-order-summary').innerHTML = html;

const checkoutQuantityElem = document.querySelector('.js-checkout-quantity');


checkoutQuantityElem.innerText = `${updateCart()} items`;

const checkoutElem = document.querySelector('.js-checkout-quantity');

checkoutElem.innerHTML = `${updateCart()} items`;


document.querySelectorAll('.js-delete-link')
.forEach((link)=>{
    link.addEventListener('click', ()=>{
        const productId = link.dataset.productId;
            // console.log('delete')
            // console.log(link.dataset.productId)
            deleteFromCart(productId)

            const itemElement = document.querySelector(`.js-cart-item-${productId}`);

            itemElement.remove();
            // console.log(itemElement);
            checkoutElem.innerHTML = `${updateCart()} items`;
        })
})



document.querySelectorAll('.js-update-link').forEach((link)=>{
    link.addEventListener('click', ()=>{
        const productId = link.dataset.productId;

        const jsItemContainer = document.querySelector(`.js-cart-item-${productId}`)

        jsItemContainer.classList.add('is-editing-quantity')

        // console.log(productId)
    })
})



document.querySelectorAll('.js-save-quantity').forEach((link)=>{
    link.addEventListener('click', ()=>{
        const productId = link.dataset.productId;

        const jsItemContainer = document.querySelector(`.js-cart-item-${productId}`);        
        jsItemContainer.classList.remove('is-editing-quantity');
        
        const inputedQuantity = +document.querySelector(`.js-input-quantity-${productId}`).value;
        
        updateCartQuantity(productId, inputedQuantity);
        
        checkoutQuantityElem.innerText = `${updateCart()} items`;
        
    })
})

document.querySelectorAll(`.js-input-elem`).forEach((link)=>{
    link.addEventListener('keydown', (e)=>{
        if(e.key === 'Enter'){
            const productId = link.dataset.productId;

            const jsItemContainer = document.querySelector(`.js-cart-item-${productId}`);        
            jsItemContainer.classList.remove('is-editing-quantity');
            
            const inputedQuantity = +document.querySelector(`.js-input-quantity-${productId}`).value;
            
            updateCartQuantity(productId, inputedQuantity);
            
            checkoutQuantityElem.innerText = `${updateCart()} items`;
        }
    })

})