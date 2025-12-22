//EXPLICIT
let a = -288347.766
// console.log(a)
console.log(typeof(a))
let aInString = String(a)
// console.log(aInString)
console.log(typeof(aInString))
let aInBoolean = Boolean(a)
console.log(aInBoolean)

let str = "jkansdfa"
let strInNumber = Number(str)
console.log(strInNumber)
let strInBoolean = Boolean(str)
console.log(strInBoolean)


// IMPLICIT

console.log(1 + "1") // only + will result in concatenatio,
//rest all arithemetic operators will get actual result of calculation
console.log(true + 5)
console.log(false + 5)
console.log(true + false)