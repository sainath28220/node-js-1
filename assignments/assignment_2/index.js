const http = require("http");
const fs = require("fs");
const b = fs.writeFileSync("./index.html","<h1>Hello world</h1>");

const server = http.createServer((req,res)=>{
    const url =  req.url
    //home page
    if (url === "/"){
        res.writeHead(200,{"content-type":"text/html"})
        res.write("<h1>Hello World<h1>")
        res.end()
    }
    // if page not found
    else{
        res.writeHead(404,{"content-type":"text/html"})
        res.write("<h1>Page Not Found<h1>")
        res.end()
    }
})

server.listen(3000)
