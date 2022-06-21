// 01 - Comparaison
// const test = 143
// const bis = 219

// console.log(test > bis)
// console.log(test < bis)
// console.log(test >= bis)
// console.log(test <= bis)
// console.log(test !== bis)
// console.log(test === bis)

// 02 - Condition
// const limit = 50
// let score = 44

// if (score >= limit){
//     console.log("Ok good !")
// } else {
//     console.log("Oh noooo")
// }

// 03 - Condition II
// const password = "azerty"

// if (password.length >= 5){
//     console.log("The password is secure")
// }else {
//     console.log("The password is not secured")
// }

// 04 - Condition III
// const limit = 50
// let score = 64
// const password = "azerty"

// if ((score >= limit) && (password.length >= 5)){
//     console.log("Everything is cool !")
// }else if ((score >= limit) || (password.length >= 5)){
//     console.log("Something is cool !")
// }else{
//     console.log("Nothing is cool !")
// }

// // 05 - Random
// const min = 1
// const max = 6

// const random = Math.floor(Math.random() * max) + min

// if (random === 6){
//     console.log("Yes, i win !")
// }else{
//     console.log("So close...")
// }

// 06 - Month
// let month = "Dld,e,mber"

// switch (month) {
//     case "January": 
//         console.log("Winter")
//         break
//     case "February": 
//         console.log("Winter")
//         break
//     case "March": 
//         console.log("Spring")
//         break
//     case "April": 
//         console.log("Spring")
//         break
//     case "May": 
//         console.log("Spring")
//         break
//     case "June": 
//         console.log("Summer")
//         break
//     case "July": 
//         console.log("Summer")
//         break
//     case "August": 
//         console.log("Summer")
//         break
//     case "September": 
//         console.log("Fall")
//         break
//     case "October": 
//         console.log("Fall")
//         break
//     case "November": 
//         console.log("Fall")
//         break
//     case "December": 
//         console.log("Winter")
//         break
//     default: 
//         console.log("This isn't a month")
// }

// 07 - Rounded but better
let roundedNumber = 3.8

if (roundedNumber < 3.5){
    console.log(Math.floor(roundedNumber))
}else if (roundedNumber >= 3.5){
    console.log(Math.ceil(roundedNumber))
}