// const htmlFile= require('./index.html')
const http = require('http')
const port = 3000
const fs = require('fs')
var html
fs.readFile('index.html', 'utf-8', (err, data) => {
    if (err) {
        throw err
    }
    console.log(data)
    // console.log(html)
    html=data


    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(html);
        res.end();

    })

    server.listen(port, () => {
        console.log(`the server is running on http://localhost:${port}`)
    })


})



