import { app } from "./app/app.js";
import { connectDb } from "./configs/db.config.js";
import { config } from "./configs/env.config.js";

const port = config.port

try {
    await connectDb()
    app.listen(port,()=>{
    console.log('server started sucessfully on port',port);
})
} catch (error) {
    console.log("error in connecting to db",error)
}