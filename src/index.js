import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { DB_NAME }  from './constants.js';
import  connectDB  from './db/index.js';

dotenv.config({
    path: './env'
})
connectDB()
.then(
    () =>
        {app.listen(process.env.PORT || 8000)
            console.log(`Server is running on port ${process.env.PORT || 8000}`);
        }

)
.catch((err) =>
    {
        console.error(err);
        }
        );


