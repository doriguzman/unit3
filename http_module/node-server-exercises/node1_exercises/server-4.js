const htmlFile= require('./template.js')
const http= require('http')
const port=3000

const server= http.createServer((req,res)=>{
    res.statusCode=200;
    res.writeHead(200,{"Content-Type": "text/html"})
    res.write(htmlFile)
    res.end()
})

server.listen(port, ()=>{
    console.log(`the server is running on http://localhost:${port}`)
})

