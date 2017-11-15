const firstLetter= (string)=> {
    let newString= string[0]
    return newString
}

console.log(firstLetter('hello'))

const reverse=(string)=>{
    let reverseString= string.split('').reverse().join('')
    return reverseString
}

reverse('hello')

const lastLetter= (string)=> {
    let newString= string[string.length-1]
    return newString
}


console.log(lastLetter('hello'))


module.exports={
    firstLetter:firstLetter, 
    reverse:reverse,
    lastLetter:lastLetter
}

