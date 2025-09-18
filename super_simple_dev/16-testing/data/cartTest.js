import { addToCartArrFunc, cart, loadFromStorage } from '../../15-external libraries/checkout-project/scripts/cart.js';

describe('test suite: addToCartArrFunc', ()=>{
    it('adds new item to the cart', ()=>{
        spyOn(localStorage, 'getItem').and.callFake(()=>{
            return JSON.stringify([]);
        });
        loadFromStorage();

        addToCartArrFunc('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
    });
});