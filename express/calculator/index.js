const express = require('express')
const port = 8000
const app = express()
const morgan = require('morgan')

app.use(morgan('dev'))

app.get('/:op/:num1/:num2', (req, res) => {
    if (!['add', 'sub', 'mul', 'div'].includes(req.params.op)){
        res.status(404)
        res.send('please use add, sub, mul or div')
    }
    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);
    res.send({
        number1: num1,
        number2: num2,
        result: {
            add: () => num1 + num2,
            div: () => num1 / num2,
            mul: () => num1 * num2,
            sub: () => num1 - num2,
        } [req.params.op]()

    })
})

app.listen(port, () => {
    console.log(`the server is at localhost/${port}`)
})