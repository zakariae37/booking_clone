import mongoose from 'mongoose'

let isConnected = false

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)
    if (!process.env.MONGODB_URL) {
        return console.log('MISSING MONGODB URL');
    }
    if (isConnected) {
        return console.log('MONGODB is already connected');
        
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: 'booking'
        })
        isConnected = true
        console.log('MONGODB IS CONNECTED SUCCESSFULLY');
        
    } catch (error) {
        console.log(error);
    }
}