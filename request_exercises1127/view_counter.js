var express = require('express')
var bodyParser = require('body-parser')
const morgan = require('morgan')
var app = express()

app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const fs = require('fs')

const writeFile = (filename, data, res) => {
    fs.writeFile(filename, data, (err) => {
        if (err) {
            return res.send(err)
        }
        res.send('File created!')
    })
}

const jsonFile = 'counter.json'

app.get('/', (req, res) => {
    fs.readFile('counter.json', (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                data = `{
                    "count": 1
                }`
                writeFile(jsonFile, data, res)
            }else{
            return res.send(err)
            }
        }
        
        let oldData = JSON.parse(data)

        const obj = {
            count: oldData.count + 1
        }

        let jsonVal = JSON.stringify(obj)
        writeFile(jsonFile, jsonVal, res)
    })
})


app.post('/reset', (req, res) => { //have to figure out how to change the value in the postman
    req.body.count = 0
    let jsonVal = JSON.stringify(req.body)
    console.log(req.body)
    fs.appendFile('counter.json', jsonVal, (err) => {
        if (err) {
            if (err.code === 'ENOENT') {
                writeFile(jsonFile, jsonVal, res)
            }
            return res.send(err)
        }
       res.send('The current count is 0')
    })
})


const port = 3000;
app.listen(port, () => {
    console.log(`listening to port ${port}`)
})