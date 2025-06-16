import mongoose from 'mongoose';
import { DB_NAME }  from '../constants.js';

const connectDB = async () => {
    try{
        const connectionInstaqnce = await mongoose.connect
        (`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB Connected: ${connectionInstaqnce.connection.host}`);

    }
    catch (error){
        console.error(error);
        process.exit(1);

    }
}
export default connectDB;
