const express = require('express')
const port = 8000
const app = express()
const morgan = require('morgan')

app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('Please type rock, paper, or scissors in the url after /')
})

app.get('/:move', (req, res) => {
    let userMove= req.params.move;
    // console.log(req.params)
    let ans= new answer(userMove)
    res.send(ans);
})


app.listen(port, () => {
    console.log(`the server is at localhost/${port}`)
})

function random() {
    let number = Math.floor(Math.random() * (3)) + 1
    if (number === 1) {
        return 'paper'
    } else if (number === 2) {
        return 'scissors'
    } else if (number === 3) {
        return 'rock'
    }
}

// user is defined on line 14 as the move that the user puts in after the /
function answer(user) {
    this.user = user;
    this.ai = random();
    this.result = result(this.user , this.ai)
}

function result(user, ai) {
    if (user === 'rock' && ai === 'rock') {
        return 'tie'
    } else if (user === 'rock' && ai === 'paper') {
        return 'win'
    } else if (user === 'rock' && ai === 'scissors') {
        return 'win'
    } else if (user === 'paper' && ai === 'rock') {
        return 'lose'
    } else if (user === 'paper' && ai === 'scissors') {
        return 'lose'
    } else if (user === 'paper' && ai === 'paper') {
        return 'tie'
    } else if (user === 'scissors' && ai === 'rock') {
        return 'lose'
    } else if (user === 'scissors' && ai === 'paper') {
        return 'win'
    } else if (user === 'scissors' && ai === 'scissors') {
        return 'tie'
    }
}