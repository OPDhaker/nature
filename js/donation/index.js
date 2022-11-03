const nextContent = `
        <div class="card-container">

            <div class="front">
                <div class="image">
                    <img src="img/chip.png" alt="">
                    <img src="img/visa.png" alt="">
                </div>
                <div class="card-number-box">**** **** **** ****</div>
                <div class="flexbox">
                    <div class="box">
                        <span>card holder</span>
                        <div class="card-holder-name">full name</div>
                    </div>
                    <div class="box">
                        <span>expires</span>
                        <div class="expiration">
                            <span class="exp-month">mm</span>
                            <span>/</span>
                            <span class="exp-year">yyyy</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="back">
                <div class="stripe"></div>
                <div class="box">
                    <span>CVV</span>
                    <div class="cvv-box"></div>
                    <img src="img/visa.png" alt="">
                </div>
            </div>

        </div>

        <form action="" id='moneyyyy'>
            <div class="inputBox">
                <span>card number</span>
                <input type="text" maxlength="16" class="card-number-input">
            </div>
            <div class="inputBox">
                <span>card holder</span>
                <input type="text" maxlength="19" class="card-holder-input">
            </div>
            <div class="flexbox">
                <div class="inputBox">
                    <span>expiration mm</span>
                    <select name="" id="" class="month-input">
                        <option value="month" selected disabled>month</option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                        <option value="05">05</option>
                        <option value="06">06</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                    </select>
                </div>
                <div class="inputBox">
                    <span>expiration yyyy</span>
                    <select name="" id="" class="year-input">
                        <option value="year" selected disabled>year</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2029">2029</option>
                        <option value="2030">2030</option>
                        <option value="2031">2031</option>
                        <option value="2032">2032</option>
                        <option value="2033">2033</option>
                        <option value="2034">2034</option>
                        <option value="2035">2035</option>
                        <option value="2036">2036</option>
                        <option value="2037">2037</option>
                        <option value="2038">2038</option>
                        <option value="2039">2039</option>
                        <option value="2040">2040</option>
                    </select>
                </div>
                <div class="inputBox">
                    <span>cvv</span>
                    <input type="text" maxlength="3" class="cvv-input">
                </div>
            </div>
            <input type="submit" id='submit-1' value="submit" class="submit-btn">
        </form>`;
const next = document.querySelector('#next');
const c = document.querySelector('.c-container');
next.style.display = "none";
let previousValue4 = '';
let values = {
    cardNumber: '',
    cvv:'',
    cardHolderName:'',
    expirationMonth:'',
    expirationYear:''
}
const enableNext = ()=>{
    if(values['cardNumber'].length===16&& values['cvv'].length===3&&values['cardHolderName'].length>0&&values['expirationMonth'].length>0&&values['expirationYear'].length>0){
        document.querySelector('#submit-1').style.display = "block";
    }
}
next.addEventListener('click', (e) => {
    c.innerHTML = nextContent;
    document.querySelector('.card-number-input').oninput = (e) => {
        if (!Number(e.target.value) && e.target.value !== "") {
            document.querySelector('.card-number-input').value = values['cardNumber'] ;
            return;
        }
        let value = document.querySelector('.card-number-input').value.split('').map((element, index) => {
            if (index === 3 || index === 7 || index === 11) {
                return element + ' '
            } else {
                return element;
            }
        });
        document.querySelector('.card-number-box').innerText = value.join('');
        values['cardNumber'] = e.target.value;
        enableNext();
    }
    document.querySelector('#submit-1').style.display = 'none';
    document.querySelector('.card-holder-input').oninput = (e) => {
        document.querySelector('.card-holder-name').innerText = e.target.value;
        values['cardHolderName'] = e.target.value;
        enableNext();
    }

    document.querySelector('.month-input').oninput = (e) => {
        document.querySelector('.exp-month').innerText = e.target.value;
        values['expirationMonth'] = e.target.value;
        enableNext();
    }


    document.querySelector('.year-input').oninput = (e) => {
        document.querySelector('.exp-year').innerText = e.target.value;
        values['expirationYear'] = e.target.value;
        enableNext();
    }

    document.querySelector('.cvv-input').onfocus = () => {
        document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
        document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';

    }

    document.querySelector('.cvv-input').onblur = () => {
        document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
        document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';

    }

    document.querySelector('.cvv-input').oninput = (e) => {
        if(!Number(e.target.value) && e.target.value !== ""){
            e.target.value = values['cvv']
            return
        }
        document.querySelector('.cvv-box').innerText = e.target.value;
        values['cvv'] = e.target.value;
        enableNext();
    }
    
    document.querySelector('#moneyyyy').onsubmit = (e) => {
        e.preventDefault();
        console.log("SUBMITTEDDD!!!!!")
        c.innerHTML = `<form action="" class="form">
        <div>
            <h1>${n}, <span id="n"></span></h1>
            <br>
            <br>
            <p id="change-me">Thank you for your donation! As promised, We will plant ${amount} trees for the ₹${amount} that you donated! </p>
           <br> <p>Your donation will save lives and our precious planet </p>
        </div>
    </form>`
    }
})
let amount = '';
let n = ''
document.querySelector('#name').addEventListener('input', (e) => {
    console.log(e.target.value)

    document.querySelector('#n').innerHTML = e.target.value;
    n = e.target.value;
    if (Number(amount) > 0 && n.length > 0  && amount.toString().length>0) {
        document.querySelector('#change-me').innerHTML = `Click on next to donate ₹${amount}`
        next.style.display = "inline-block";
    } else {
        document.querySelector('#change-me').innerHTML = ` PLEASE FILL OUT THIS FORM!`
        next.style.display = "none";
    }
})

document.querySelector('#amount').addEventListener('input', (e) => {
    if (e.target.value === '') {
        document.querySelector('#amount').value = ''
        return;
    }
    if (!Number(e.target.value) || Number(e.target.value) > 5000) {
        document.querySelector('#amount').value = amount.toString().trim();

        document.querySelector('#change-me').innerHTML = ` PLEASE FILL OUT THIS FORM!`
        next.style.display = "none";

        return;
    }
    amount = e.target.value;
    document.querySelector('#amount').value = amount.toString().trim();

    if (Number(amount) > 0 && amount.toString().length>0 && n.length > 0) {
        document.querySelector('#change-me').innerHTML = `Click on next to donate ₹${amount}`
        next.style.display = "inline-block";
    } else {

        document.querySelector('#change-me').innerHTML = ` PLEASE FILL OUT THIS FORM!`
        next.style.display = "none";
    }
})