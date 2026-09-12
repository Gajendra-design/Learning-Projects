import app from './src/app.js'
import { envVariables } from './src/config/config.js';
import { connectDb } from './src/config/db.js';
const port = envVariables.port ?? 8000

try {
    await connectDb()

    app.listen(port, () => {
        console.log('server is running on port', port);
    })
} catch (error) {
    console.error('error in connecting db',error);
    process.exit(1);
    
}

