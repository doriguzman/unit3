const fs= require('fs')

//create empty file

// fs.writeFile(`watch-me.txt`, '', (err)=>{
//     if(err){
//         throw err
//     }
//     console.log('file is written!')
// })


// creating another empty file

// fs.writeFile(`new-text.txt`, '', (err)=>{
//     if(err){
//         throw err
//     }
//     console.log('file is written!')
// })
fs.watch('watch-me.txt', (eventType, filename) => {
    if (eventType === 'change') {
      fs.readFile('watch-me.txt', (err, data) => {
        if (err) throw err;
        fs.writeFile('new-text.txt', data, err => {
          if (err) throw err;
        })
      })
    }
  })


  

