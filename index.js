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
// const score = 44

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
// const score = 64
// const password = "azerty"
// let passedTest =  score >= limit
// let isPasswordSecured = password.length >= 5

// if (passedTest && isPasswor'dSecured){
//     console.log("Everything is cool !")
// }else if (passedTest || isPasswordSecured){
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
// const month = "Dld,e,mber"

// switch (month) {
//     case "December": case "January": case "February":
//         console.log("Winter")
//         break
//     case "March": case "April": case "May":
//         console.log("Spring")
//         break
//     case "June": case "July": case "August": 
//         console.log("Summer")
//         break
//     case "September": case "October": case "November":
//         console.log("Fall")
//         break
//     default: 
//         console.log("This isn't a month")
// }

// 07 - Rounded but better
// const roundedNumber = 12.7
// const delta = roundedNumber - Math.floor(roundedNumber)
// if (delta <= 0.5){
//     console.log(Math.floor(roundedNumber))
// }else {
//     console.log(Math.ceil(roundedNumber))
// }

// const roundedNumber = 12.7
// const delta = Math.floor(roundedNumber) + 0.5
// if (roundedNumber <= delta){
//     console.log(Math.floor(roundedNumber))
// }else {
//     console.log(Math.ceil(roundedNumber))
// }

// 08 - Rounded but better, Méthode 2
// const roundedNumber = 12.22
// const roundedString = roundedNumber.toString()
// const index = roundedString.indexOf(".") + 1
// let roundedSub = roundedString.substring(index, index + 1)
// roundedSub = Number(roundedSub)
// console.log(typeof(roundedSub))

// if (roundedSub <= 5) {
//     console.log(Math.floor(roundedNumber))
// }
// else {
//     console.log(Math.ceil(roundedNumber))
// }


// 09 - Rounded but better, Méthode 3
//  const roundedNumber = 12.6
//  const roundedString = roundedNumber.toString()
//  const roundedSplit = roundedString.split('.')
//  const roundedArray = roundedSplit[1]

// if (roundedArray < 5) {
//     console.log(Math.floor(roundedNumber))
// }
// else {
//     console.log(Math.ceil(roundedNumber))
// }