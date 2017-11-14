const fs= require('fs');



// fs.mkdir('folder-1', () =>{
//     console.log('created a new folder!')
// })

fs.rmdir('folder-1', (err, data)=>{
    if (err) 
    console.log('error!', err);
    console.log('Deleted a folder ')
})

for (var i = 0; i<100; i++){
    fs.mkdir('folder-1', () =>{
 console.log('created a new folder!')
 })
}