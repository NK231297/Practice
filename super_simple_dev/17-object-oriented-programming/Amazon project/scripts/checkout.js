import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { kart } from "./cart.js";
import { productsInfo } from "../data/products.js";
import { getDeliveryOptionById } from "./utils/deliveryOptions.js";
import { formatMoney } from "./utils/money.js";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

renderOrderSummary();
renderPaymentSummary();

