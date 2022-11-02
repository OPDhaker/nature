const cvv = document.querySelector('#card-cvv')
const cardNumber = document.querySelector('#card-number');

console.log(cvv)
let previousValue = null;
cvv.addEventListener('keyup', (e)=>{
    console.log(e.target.value)
    if(!Number(e.target.value)){
        cvv.value = previousValue;
    }
    previousValue = e.target.value;
})
let previousCardNumber = null;
cardNumber.addEventListener('keyup', (e)=>{
    console.log(e.target.value)
    if(!Number(e.target.value.split('-')[0] || !Number(e))){
        cardNumber.value = previousCardNumber;
    }
    if(e.target.value === '4'){
        e.target.value = 
    }
    previousCardNumber = e.target.value;
})