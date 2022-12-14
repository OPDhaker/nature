import names from './names.js'

const popup = (n, money) => {
    return `
    <div class="popup">
        <p>${n} just donated ₹${money}!</p>
    </div>
    `
}
// let names = ["Om", "Dhairya", "Shreshth", "Varad", "Mr. Beast"]
// const name = names[Math.floor(Math.random() * names.length)]
// console.log(`${name}`)
const getMoney = () => {
    return Math.floor(Math.random() * 5000)
}

const removePopup = () => {

    document.querySelector('.popup').style = "left: -20rem";
    setTimeout(() => {
        document.getElementById("popup-container").innerHTML = '';
    }, 1000)
}

const addPopup = (money, n) => {

    document.getElementById('popup-container').innerHTML = popup(n, money);

}

setInterval(() => {
    const money = getMoney();
   
    const name = names[Math.floor(Math.random() * names.length)]
    // console.log(`${name}`)
    addPopup(money, name)
    setTimeout(() => {
        removePopup()
    }, 2000)
}, 5000)