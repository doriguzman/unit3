const add = (num1, num2) => num1 + num2

const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3])
console.log(`the result is: ${add(num1, num2)}`)