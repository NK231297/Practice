document.querySelector('.js-calculate-button').addEventListener('click', ()=>{
    const billAmount = +document.querySelector('.js-bill-amount').value;
    const tipPercent = +document.querySelector('.js-tip-percent').value;
    const tipAmount = (tipPercent/100).toFixed(2) * billAmount;

    const totalAmount = billAmount + tipAmount;

    document.querySelector('.js-total').innerText = totalAmount.toFixed(2);
});