const fs= require('fs');


// created a new folder
// fs.mkdir('folder-1', () =>{
//     console.log('created a new folder!')
// })

//removing the folder we just created 
// fs.rmdir('folder-1', (err, data)=>{
//     if (err) 
//     console.log('error!', err);
//     console.log('Deleted a folder ')
// })


//making 100 folders 

// for (var i = 1; i<101; i++){
//     fs.mkdir(`folder-`+ i , () =>{
//     console.log('created a new folder!')
//  })
// }



//renaming all the folders 

// for (var i = 1; i<101; i++){
//     fs.rename(`folder-`+ i , `new-folder` +i, () =>{
//     console.log('renamed the folder!')
//  })
// }

//removing 100 folders we just made

// for (var i = 0; i<101; i++){
//     fs.rmdir(`new-folder`+ i , () =>{
//     console.log('deleted the folder!')
//  })
// }