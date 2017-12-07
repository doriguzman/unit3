var express = require('express')
var bodyParser = require('body-parser')
const morgan = require('morgan')
var app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const fs = require('fs')


app.post('/login', (req,res)=>{
    if(!req.body.username || !req.body.password){
        res.send('Please insert username/passwords')
    }else {
    fs.readFile('user.json', (err,data) => {
        if(err){
            res.send(err)
        } else {
            let userInfo = JSON.parse(data)
            userInfo.forEach((obj) => {
                if(obj.username === req.body.username && obj.password === req.body.password){
                    return res.send(`You are in!`)
                }
            })
            return res.send(`Invalid username/password`)
        }
    })
}
} )

const port = 3000;
app.listen(port, () => {
    console.log(`listening to port ${port}`)
})


