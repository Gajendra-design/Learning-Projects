const http = require('http');

const server = http.createServer((req,res)=>{
    res.end('this is the response from the server')
})

server.listen(3000,()=>{
    console.log('server started sucessfully');
})