import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    const DB_URL = process.env.MONGODB_URL;

    if(!DB_URL) return console.log('MONGODB_URL not founld');
    if(isConnected) return console.log('Already connected to MongoDB');

    try {
        await mongoose.connect(DB_URL);

        isConnected = true;

        console.log("Connected Successfully");
        
    } catch (error) {
        console.log(error);
    }  
        
}