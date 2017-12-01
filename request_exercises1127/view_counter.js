const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const app = express()


app.use(logger('dev'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


//what .USE MEANS whenever you get a request, forward that request to that body parser 

// parse application/json
app.use(bodyParser.json())

const counter;
app.get('/', (req, res) => {
    fs.readfile('counter.json', 'utf8', (err, data)=>{
        if(err){
            if (err.code === 'ENOENT'){
                fs.writeFile('counter.json', data, (err)=>{
                    counter ++; 

            }
        }
           
            
        }
    })
    

      res.send(`Welcome to my Site`)
  })
