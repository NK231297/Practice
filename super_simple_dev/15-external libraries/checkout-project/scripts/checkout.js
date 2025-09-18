import { renderOrderSummary } from "./checkout/order-summary.js";
import { renderPaymentSummary } from './checkout/payment-summary.js';
import renderCheckoutHeader from "./checkout/checkoutHeader.js";
import './cart.js';

renderOrderSummary();

renderPaymentSummary();

renderCheckoutHeader();