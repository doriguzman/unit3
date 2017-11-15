const mathModule=require('./math-module.js')

const stringModule= require('./string_module.js')

let findSum = mathModule.sum(2,3);
let findMultiply= mathModule.multiply(2,3);
let findDivide=mathModule.divide(4,2);
let findSquare=mathModule.square(2,2);


console.log(findSum)
console.log(findDivide)
console.log(findMultiply)
console.log(findSquare)


let firstLetter= stringModule.firstLetter('hello')
let lastLetter=stringModule.lastLetter('hello')
let reverser=stringModule.reverse('hello')

console.log(firstLetter)
console.log(lastLetter)
console.log(reverser)