
const repeat= (string)=> string 

const exclaim= (string)=> string + "!"

const reverse= (string)=> string.split('').reverse().join('')


const express = require('express')
const port = 3000
const app = express()
const morgan = require('morgan')

app.use(morgan('dev'))


app.get('/repeat/:word', (req, res) => {
    let userWord= req.params.word;
    let print= userWord.slice(1)
    res.send(repeat(print));
})


app.get('/exclaim/:word', (req, res) => {
    let userWord= req.params.word;
    let print= userWord.slice(1)
    res.send(exclaim(print));
})


app.get('/reverse/:word', (req, res) => {
    let userWord= req.params.word;
    let print= userWord.slice(1)
    res.send(reverse(print));
})

app.get('/', (req, res) => {
    res.send(`please insert 'repeat', 'exclaim' , or 'reverse' followed by a '/:word' `);
})
app.listen(port, () => {
    console.log(`the server is at http://localhost:${port}`)
})
