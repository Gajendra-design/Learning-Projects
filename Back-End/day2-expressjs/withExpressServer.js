//first step express ko reirew/import karo(require is just old way of import before esm modele)
const express = require('express');

//second step express ko call karo now in industry practice we call it and save its outcome in app variable
const app = express();

const port = 3000;  //port varibale bana lo it is a good practice

//third step use middelware if you need any
//now hamare iss project me humko req se aa rahe data ko hadel karna hai jo ki body me aayega and express jo hai woo hamarehttp wale method ko tho handel kar saktha hai taki hum scalable and jisme bug easily fix ho sake likhe but ye text data or json data ko process nahi kar saktha hai do for that
//we are using express.json middelware and remember middelware use karne ke liye humexpress me use method ka use karthe hai
app.use(express.json())

//now fourth step me hum log use karege jo bhi request pe humko kaam karna hai and jis bhi end point pewo request proceed karwani hai 

app.get('/',(req,res)=>{
    res.send('welcome user');    //yaha send use hoga http wale method me hum end use kar rahe the
    console.log(req.body);
    
})

//now ye step essential hai mostly bhul jate hai log isko hune server tho bana liya but humko server start tho karna hoga so for that use app.listen
app.listen(port,()=>{
    console.log('server started sucessfullu on port',port);
})