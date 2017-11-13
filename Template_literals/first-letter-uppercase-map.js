const changeUpper= (string)=>{
    let splitter= string.split(' ');
     return splitter.map(elem=> elem.replace(elem[0], elem[0].toUpperCase())).join(' ')
    
}

console.log(changeUpper('the quick brown fox'))





