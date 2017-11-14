const fs= require('fs');




// fs.mkdir('lyrics-1.txt', () => {
//     console.log('created another new repo!')
// })

// fs.writeFile('lyrics-1.txt', `Work, work, work, work, work, work 
// You see me I be work, work, work, work, work, work`, (err)=> {
//     if (err){
//         throw err;
//     }
//     console.log('the file has ben saved')
// })

// fs.readFile('lyrics-1.txt', function(err,data){
//     if (err) {
//     throw err
// };
//     console.log(data.toString());
// })


// fs.writeFile('lyrics-2.txt', `You see me do me dirt, dirt, dirt, dirt, dirt, dirt
// There's something 'bout that work, work, work, work, work, work`, (err)=> {
//     if (err){
//         throw err;
//     }
//     console.log('the file has been saved')
// })


// fs.readFile('lyrics-1.txt' ,(err,data)=>{
//     if (err){
//         throw err;
//     }
//         console.log(data.toString())
// })
// fs.readFile('lyrics-2.txt' ,(err,data)=>{
//     if (err){
//         throw err;
//     }
//         console.log(data.toString())
// })


const lyrics1 = fs.readFileSync('lyrics-1.txt', 'utf8')
console.log( `${lyrics1}`)

const lyrics2 = fs.readFileSync('lyrics-2.txt', 'utf8')
console.log(`${lyrics1}`)

const lyrics3= lyrics1 + lyrics2

fs.writeFile('lyrics-3.txt', lyrics3 , (err)=>{
        if(err){
    throw err
    }
    console.log('the file has been saved')
})




