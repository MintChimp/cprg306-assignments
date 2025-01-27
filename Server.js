const http = require("http");

const server = http.createServer((req, res)=>{
    res.write("<h1>Home Page</h1>")
})

server.listen(3000, ()=>{
    console.log("server is running on port 3000")
})