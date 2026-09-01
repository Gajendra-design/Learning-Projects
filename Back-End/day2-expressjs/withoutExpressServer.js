const http = require('http');

//now yaha pe problem ye hai ki maan lo hamare paas 50 endpont hai tho humko phir sab kuch if-else ya switch-case me handel karna hoga ye code bhout bekar hoga in terms of redability, maintainlabity and scalability so iske liye express aaya market me

const server = http.createServer((req,res)=>{

    //now hum multiple responses likh rahe hai yaha pe and server hamesha koi ek response deta hai and phir return ho jata hai so do't forget to use return in each blick othrwise the code will break

    if(req.url === '/')
        return res.end('this is / respomse')

    if(req.url === '/home')
        return res.end('this is /home response')

    if(req.url === '/about')
       return res.end('this is /about response')

    res.end('this endpoint has no respose')

})

server.listen(3000,()=>{
    console.log('server is running on port 3000');
})