import { app } from "./app/app.js";
import { connectDb } from "./config/db.js";
import { config } from "./config/env.js";

try {
    const port = config.PORT
    await connectDb()
    app.listen(port, () => {
        console.log('server running successfully on port', port);

    })
} catch (error) {
    console.log('error in connecting DB', error);

}