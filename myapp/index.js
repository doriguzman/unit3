const express = require('express') // import express
const morgan = require('morgan')
const port = 8000; // we will use this later
const app = express() // create an express server
app.use(morgan('dev'))


app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1> <a href="page2"> Page2 </a>')
}) // routes the '/' URL path to produce a response of 'Hello World!'

app.get('/page2', (req, res) => {
    res.send('Hello World Too!')
})

app.get('/page3', (req, res) => {
    res.send('Hello World 3!')
})

// this redirects us to the index page
//better to put at the end kinda like a catch all type thing 

// app.get('*', (req, res) => {
//     res.redirect('/')
// })


//in order to use this name thing, we have to // the redirecting we had above
app.get('/users/:name', (req, res) => {
    res.send(`Hello ${req.params.name}`)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) // asks our server to listen for requests on port 8000, logging to the console to confirm that things are working
