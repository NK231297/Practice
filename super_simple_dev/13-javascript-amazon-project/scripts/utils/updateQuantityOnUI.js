export const updateCart = ()=>{
    let quantity = 0;

    let abc = JSON.parse(localStorage.getItem('cart')) || [];
    abc.forEach((item)=>{
        quantity += item.quantity;
    })

    return quantity;
}
