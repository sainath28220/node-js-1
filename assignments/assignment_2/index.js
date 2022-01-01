const http = require("http");
const fs = require("fs");
const b = fs.writeFileSync("./index.html","<h1>Hello world</h1>");

const server = http.createServer((req,res)=>{
    const data = fs.readFileSync("./index.html")
    if (req.url === "/"){
        res.writeHead( 200, {'Content-type' : 'text/html'});
        res.write(data.tostring())
        res.end();
    }
    res.end("error file")
})

server.listen(3000)
