const http = require('http')
const url = require('url')
const port = 3000;
const fs = require('fs')
var page2;
var index;


fs.readFile('page2.html', 'utf-8', (err, data) => {
    if (err) {
        throw err
    }
    console.log(data)

    page2 = data
})

fs.readFile('index.html', 'utf-8', (err, data) => {
    if (err) {
        throw err
    }
    console.log(data)
    // console.log(html)
    index = data
})

const server = http.createServer((req, res) => {
    // console.log(req.url)
    res.writeHead(200, { 'Content-Type': 'text/html' });
    if (req.url === '/page2.html') {
        res.write(page2)
        res.end()
    } else if (req.url === '/') {
        res.write(index)
        res.end()
    } else if (req.url === '/index.html') {
        res.write(index)
        res.end()
    } else {
        res.write('page not found')
        res.end()
    }
})

server.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
})

