const fs= require('fs');



// function readFile(fileName, callback){
//     //if there is an error
//     //when trying to read the file
//     callback(//'error')
//     // if the file was read successfully
//     callback(null, data)
// }


// fs.readFile('words.txt', function(err,data){
//     console.log(`data: ${data}`)
// })



// fs.writeFile('words.txt', 'helllloooo', (err)=> {
//     if (err){
//         throw err;
//     }
//     console.log('the file has been saved')
// })



// fs.watch(`words.txt`, (eventType, filename)=> {
//     console.log(eventType + ' in ' + filename);
// })



// fs.watch('new-file.txt', (eventType, filename) => {
//     console.log(eventType + ' in ' + filename);
//   })