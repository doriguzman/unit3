const fs = require('fs')
const logger = require('morgan')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = 3000
app.use(logger('dev'))

app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())


const writeFile = (filename, data, res) => {
    fs.writeFile(filename, data, (err) => {
      if (err) {
        return res.send(err)
      }
      res.send('success')
    })
  }

  const numberfile= 'number.json'


  //this part for the post basically just overrides every single
  // part of the json file to one key value in an object
  app.post('/number',(req,res)=>{
        const jsonValue= JSON.stringify(req.body)
        return writeFile(numberFile, jsonValue, res)
  })



  app.get('/number', (req, res)=>{
      fs.readFile('number.json', 'utf8', (err,data)=>{
          // data is a json string 
    
          if (err){
              if (err.code === 'ENOENT'){
                  return res.send('There is no number')
              }else{
                  return res.send(err)
              }
          }
          const numberObj= JSON.parse(data)
          res.send(`the number is ${numberObj.number}`)
         
      })
  })

app.listen(port, ()=>{
    console.log(   `listening on ${port}`)
})
