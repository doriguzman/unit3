
const repeat= (string)=> string 

const exclaim= (string)=> string + "!"

console.log(exclaim(repeat('hello')))

const express = require('express')
const port = 3000
const app = express()
const morgan = require('morgan')


app.use(morgan('dev'))


app.get('/:word/:cmd1/:cmd2', (req, res) => {
    const {word, cmd1, cmd2}= req.params 
    let userWord= `${word}`
    const userCommand1= `${cmd1}`
    const userCommand2= `${cmd2}`
  
    const commands= {
        repeat: repeat(userWord),
        exclaim:exclaim(userWord),  
    }

    var firstRequest= commands[userCommand1]
    var secondRequest= commands[userCommand2]
    
    console.log('hello')

    res.send( firstRequest+ secondRequest);
    }
)

app.listen(port, () => {
    console.log(`the server is at http://localhost:${port}`)
})
