import { loadCart } from "./cart.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProductsFetch } from "../data/products.js";
import { car } from "../data/car.js";
import '../data/backend-practice.js';

function stepBystepLoad(){
    new Promise((resolve, reject)=>{
        console.log('loading products...')
        setTimeout(()=>{
            resolve();
        }, 1000)
    }).then(()=>{
        loadProductsFetch(()=>{
            resolve();
        });
        
    }).then(()=>{
        return new Promise((resolve, reject)=>{
            console.log('loading cart...')
            setTimeout(()=>{
                loadCart(()=>{
                    resolve();
                })
            }, 1000)
        })
    }).then(()=>{
        return new Promise((resolve, reject)=>{
            console.log('rendering order summary');
            
            setTimeout(()=>{
                renderOrderSummary();
                resolve();
            }, 1000)

        })
    }).then(()=>{
        return new Promise((resolve, reject)=>{
            console.log('rendering payment summary');
            
            setTimeout(()=>{
                renderPaymentSummary();
                resolve();
            }, 1000)
            
        })
    }).then(()=>{
        console.log('render complete');
    });
};

function quickLoading(){
    Promise.all([
        loadProductsFetch((resolve, reject)=>{
            resolve();

        }),
        new Promise((resolve, reject)=>{
            loadCart(()=>{
                resolve();
            });
        })

    ])
    .then(()=>{
        return Promise.all([
            renderOrderSummary(),
            renderPaymentSummary()
        ]);
        
    }).then(()=>{    
        console.log('render complete')
    })    
};

quickLoading();

/*
Promise.all([
    loadProductsFetch((resolve, reject)=>{
        resolve();

    }),
    new Promise((resolve, reject)=>{
        loadCart(()=>{
            resolve();
        });
    })

])
.then(()=>{
    return Promise.all([
        renderOrderSummary(),
        renderPaymentSummary()
    ]);
    
}).then(()=>{    
    console.log('render complete')
})
*/
/*
new Promise((resolve)=>{
    loadProducts(()=>{
        resolve();
    });
}).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
})
*/



/*
loadProducts(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});
*/