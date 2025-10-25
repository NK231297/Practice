import { kart } from "../cart.js";
import { formatMoney } from "../utils/money.js";
import { addToOrders } from "../../data/orders.js";

export function renderPaymentSummary(){

    let html = `

        <div class="payment-summary-title">
            Order Summary
        </div>

        <div class="payment-summary-row">
        <div>Items (${kart.updateCartNumFunc()}):</div>
        <div class="payment-summary-money">$${formatMoney(kart.tic())}</div>
        </div>

        <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money">$${formatMoney(kart.tdc())}</div>
        </div>

        <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">$${formatMoney(+kart.tic() + +kart.tdc())}</div>
        </div>

        <div class="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div class="payment-summary-money">$${formatMoney(kart.taxes())}</div>
        </div>

        <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money">${formatMoney(kart.orderTotal())}</div>
        </div>

        <button class="place-order-button button-primary
         js-place-order">
            Place your order
        </button>
    `

    document.querySelector('.js-payment-summary').innerHTML = html;

    // console.log(totalCostOfItems());

    document.querySelector('.js-place-order').addEventListener('click', async ()=>{
        if(kart.cart.length === 0){
            console.log('Empty Cart.');
            return;
        }

        const response = await fetch('https://supersimplebackend.dev/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cart: kart.cart
            })
        });

        const order = await response.json();
        /*
        new Promise((resolve, reject)=>{
            addToOrders(order);
            resolve();
        }).then(()=>{
            new Promise((resolve, reject)=>{
                localStorage.removeItem('cart');
                resolve();
            }).then(()=>{

                window.location.href = 'orders.html';
            })
            
        })
        */

        
        await addToOrders(order);
        
        localStorage.removeItem('cart');

        window.location.href = 'orders.html';
        
    })

};