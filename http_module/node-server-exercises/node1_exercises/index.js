const http= require('http')
const port= 3000


//creating a server with an anon func with 2 args: request and response 
const server= http.createServer((req,res)=>{
    res.statusCode= 200;
    //send  the request successfully, then we want a good response aka 200 (vs bad response 404)
    res.writeHead(200,{"Content-Type": "text/html"});
    res.write("<h1>What's up</h1>");
    res.end();

})


//listen initializes our server, so we told our server what to do
// and now we're telling our server to listen for requests on the port var 
server.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
})