// function countOddsAndEvens(arr) {
//     return arr.reduce((acc, num) => {
//       console.log(`evens: ${acc.evens}, odds: ${acc.odds} num: ${num}`)
//       if (num % 2 === 0) {
//         acc.evens += 1
//         return acc
//       } else {
//         acc.odds += 1
//         return acc
//       }
//     }, { odds: 0, evens: 0 })
//   }

//   console.log(countOddsAndEvens([11, 2, 36, 4, 15]));

function validatePIN(pin) {
  console.log(pin)
  var reg = '/^\d+$/';
  //return true or false
  if (isNaN(pin)) {
    console.log(pin)
    return false
  } if ((pin.match(reg))){
    if (pin.length === 6 || pin.length === 4) {
      return true
    } else {
      return false
    }
  }

}

console.log(validatePIN('.231'))


