import { priceFormat } from "../../15-external libraries/checkout-project/scripts/utils/priceFormat.js";

describe('test suite: priceFormat', ()=>{
    it('converts cents to dollars', ()=>{
        expect(priceFormat(2045)).toEqual('20.45');
    });
    it('works with 0', ()=>{
        expect(priceFormat(0)).toEqual('0.00');
    })
    it('rounds to nearest cent', ()=>{
        expect(priceFormat(2000.5)).toEqual('20.01');
    })
    it('rounds to nearest cent', ()=>{
        expect(priceFormat(2000.3)).toEqual('20.00');
    })
});