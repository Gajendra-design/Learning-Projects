import app from "./src/app.js";
import { connectDb } from "./src/configs/db.config.js";
import {envPort} from './src/configs/env.config.js'

const port = envPort ?? 8000;

try {
    await connectDb();

    app.listen(port,()=>{
    console.log('server is running on port',port);
})
} catch (error) {
    console.log('error in connecting db',error);
    process.exit(1)
    
}