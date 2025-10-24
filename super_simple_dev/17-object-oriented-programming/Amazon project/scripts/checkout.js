import { loadCartFetch               } from  "./cart.js";
import { renderOrderSummary     } from  "./checkout/orderSummary.js";
import { renderPaymentSummary   } from  "./checkout/paymentSummary.js";
import { loadProductsFetch      } from  "../data/products.js";
import { car                    } from  "../data/car.js";
import                                  "../data/backend-practice.js";

async function quickLoading(){
    try{
        //throw 'error1';

        await Promise.all([
            loadProductsFetch(),
            loadCartFetch()
        ])

    } catch(error){
        console.log('Unexpected error. Please try again later.')
    }

    renderOrderSummary();
    renderPaymentSummary();
    
    console.log('render complete');
        
};

quickLoading();

/*
async function loadPage(){
    console.log('load page');
    
    loadProductsFetch();
};

loadPage().then(()=>{
    console.log('next step');    
    
})
*/

/*

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
                loadCartFetch(()=>{
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
            loadCartFetch(()=>{
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

*/

/*
Promise.all([
    loadProductsFetch((resolve, reject)=>{
        resolve();

    }),
    new Promise((resolve, reject)=>{
        loadCartFetch(()=>{
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