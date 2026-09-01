//now mvc -> model view controlle arcitecture me server.js file ka kaam keveal or keval server ko start karna hai

//first import the app in which we have called our express
const app = require('./src/app')

const port = 3000;

app.listen(port,()=>{
    console.log(`server started sucessfully on port ${port}`);
})