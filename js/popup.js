const popup = (n, money) =>{
    return `
    <div class="popup">
        <p>${n} just donated $${money}!</p>
    </div>
    `   
}
let names = []
const getMoney = () =>{
    return Math.floor(Math.random()*500)/10
}

const removePopup = () =>{
    document.getElementById("popup-container").innerHTML = '';
}

const addPopup = (money, n) =>{
    document.getElementById('popup-container').innerHTML = popup(n, money);
}

setInterval(()=>{
    const money = getMoney();
        
    addPopup(money, names[Math.floor(Math.random*names.length)])
    setTimeout(()=>{
        removePopup()
    }, 2000)
}, 3000)