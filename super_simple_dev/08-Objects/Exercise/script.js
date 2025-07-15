function comparePrice (product1, product2){
    if(product1['price ($)'] < product2['price ($)']){
        return product1;
    }
    else{
        return product2;
    };
}

function isSameProduct(product1, product2){
    if(product1.name === product2.name || product1['price ($)'] === product2['price ($)']){
        return true;
    }
    else{return false};
};

const product1 = {
    name: 'Basketball',
    'price ($)': 2095 / 100
};

const product2 = {
    name:'Cricket bat',
    'price ($)':4499 / 100
};

const product3 = {
    name: 'Basketball',
    'price ($)': 2095 / 100
};

