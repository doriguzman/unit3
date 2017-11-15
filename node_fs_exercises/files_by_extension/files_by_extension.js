const fs = require('fs');
const path = require('path');


fs.readdir('.', (err, data) => {
    if(err) {
         throw err;
    }
console.log(data)

});


const filter = (dir, ext) => {
    fs.readdir(dir, (err, data) => {
         if(err) {
             throw err;
        }
        data.map(elem => {
            console.log(path.extname(elem))
            if(path.extname(elem).slice(1) === ext){
                console.log(elem)
            }
        })
    });
  
}

filter('.', 'js') 