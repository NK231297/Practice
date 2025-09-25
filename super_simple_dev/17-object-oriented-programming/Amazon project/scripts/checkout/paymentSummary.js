import { updateCartNumFunc, tic, tdc, taxes, orderTotal} from "../cart.js";
import { formatMoney } from "../utils/money.js";

export function renderPaymentSummary(){

    let html = `

        <div class="payment-summary-title">
            Order Summary
        </div>

        <div class="payment-summary-row">
        <div>Items (${updateCartNumFunc()}):</div>
        <div class="payment-summary-money">$${formatMoney(tic())}</div>
        </div>

        <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money">$${formatMoney(tdc())}</div>
        </div>

        <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money">$${formatMoney(+tic() + +tdc())}</div>
        </div>

        <div class="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div class="payment-summary-money">$${formatMoney(taxes())}</div>
        </div>

        <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money">${formatMoney(orderTotal())}</div>
        </div>

        <button class="place-order-button button-primary">
            Place your order
        </button>
    `

    document.querySelector('.js-payment-summary').innerHTML = html;

    // console.log(totalCostOfItems());
}