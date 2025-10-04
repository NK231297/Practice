import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { kart } from "./cart.js";
import { productsInfo, loadProducts } from "../data/products.js";
import { getDeliveryOptionById } from "./utils/deliveryOptions.js";
import { formatMoney } from "./utils/money.js";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import { car } from "../data/car.js";
import '../data/backend-practice.js';

new Promise((resolve)=>{
    loadProducts(()=>{
        resolve();
    });
}).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
})




/*
loadProducts(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});
*/