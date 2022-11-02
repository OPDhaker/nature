// import names from './names'
const popup = (n, money) => {
    return `
    <div class="popup">
        <p>${n} just donated $${money}!</p>
    </div>
    `
}
// let names = ["Om", "Dhairya", "Shreshth", "Varad", "Mr. Beast"]
// const name = names[Math.floor(Math.random() * names.length)]
// console.log(`${name}`)
const getMoney = () => {
    return Math.floor(Math.random() * 500) / 10
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
    let names = ["Trent Small",
    "Jedd Levy",
    "Francis Reese",
    "Ferne Blanchard",
    "Agnes Charlton",
    "Howard Hill",
    "Rafe Christian",
    "Anton Guest",
    "Isla-Mae Smyth",
    "Gianni Landry",
    "Charlene Mitchell",
    "Iestyn Elliott",
    "Imogen Mata",
    "Aalia Lord",
    "Sophia Baxter",
    "Cora Blackwell",
    "Charli Owens",
    "Emmanuel Kumar",
    "Maryam Browne",
    "Derek Driscoll",
    "Jonny Webb",
    "Aidan Bouvet",
    "Qasim Acosta",
    "Randall Graham",
    "Keiren Vazquez",
    "Josiah Monaghan",
    "Jordyn Mcintosh",
    "Thalia Hubbard",
    "Cohen Campos",
    "John-James Herring",
    "Siena Higgs",
    "Faraz Downs",
    "Haidar Pham",
    "Ava-Rose Bowes",
    "Chelsy Brady",
    "Lacey-Mae O'Doherty",
    "Arron Cain",
    "Shae Wormald",
    "Karis Cobb",
    "Warwick Ballard",
    "Bert Beard",
    "Josie Flores",
    "Shreya Weber",
    "April Drew",
    "Brandon-Lee Mckenzie",
    "Salim Mair",
    "Lacy Riddle",
    "Rihanna Whelan",
    "Rafael Rogers",
    "Sohaib Love",
    "Alessio Eaton",
    "Jean Bishop",
    "Lorelei Howard",
    "Ayyan Hammond",
    "Julian Hudson",
    "Aniyah Martins",
    "Elize Black",
    "Maude Stamp",
    "Giselle Hart",
    "Anayah Torres",
    "Evie-Mai Velez",
    "Elora Hagan",
    "Abdulrahman Noel",
    "Scarlette Nicholson",
    "Alec Hutchinson",
    "Alissia Irvine",
    "Eloisa Bassett",
    "Lily-Mai Arias",
    "Krystian Mckay",
    "Niyah Cousins",
    "Danial Harding",
    "Alayna Stanton",
    "Tracy Dowling",
    "Olivia Kidd",
    "Kirandeep Flynn",
    "Kashif Friedman",
    "Aleksandra Bate",
    "Frazer Tate",
    "Craig Burrows",
    "Guy Finley",
    "Mared Gill",
    "Rowan Macias",
    "Kathleen Lamb",
    "Elisha Liu",
    "Fraser Ortega",
    "Katelin Singh",
    "Elyse Amos",
    "Chad Huang",
    "Idris Frederick",
    "Finnian Abbott",
    "Ayva Sloan",
    "Kirstin Branch",
    "Jasmin Richmond",
    "Ruby-Rose Bloom",
    "Ida Doherty",
    "Rikki Couch",
    "Lily-Rose Bridges",
    "Sanjeev Shannon",
    "Hibah Mayo",
    "Tamar Carlson"]
    const name = names[Math.floor(Math.random() * names.length)]
    // console.log(`${name}`)
    addPopup(money, name)
    setTimeout(() => {
        removePopup()
    }, 2000)
}, 5000)