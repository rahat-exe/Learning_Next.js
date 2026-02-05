import mongoose, { mongo } from 'mongoose'
const URL = process.env.MONDODB_URL;

export async function connectDB(){
    try {
        const db = await mongoose.connect(URL)
        console.log(`MongoDB connected`)
    } catch (error) {
        console.error(`MongoDB connection failed ${error}`)
    }
}