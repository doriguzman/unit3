const repeat = (string) => string

const exclaim = (string) => string + "!"

const reverse = (string) => string.split('').reverse().join('')


const express = require('express')
const port = 3000
const app = express()
const morgan = require('morgan')

app.use(morgan('dev'))



app.get('/:command/:word', (req, res) => {
    const { command, word } = req.params
    const userWord = `${word}`
    const userCommand = `${command}`
    const commands = {
        repeat: repeat(userWord),
        exclaim: exclaim(userWord),
        reverse: reverse(userWord)
    }


// Object.keys(commands) -> takes the keys in the object and puts them into an array


    var array = ['repeat', 'exclaim', 'reverse']

    if (!array.includes(userCommand)){
        return res.send(userCommand + ' is not a valid command')
    } else{
        return res.send(commands[userCommand])
    }
})


    app.listen(port, () => {
        console.log(`the server is at http://localhost:${port}`)
    })
