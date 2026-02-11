// import mongoose from 'mongoose'
// const MONGO_URL = process.env.MONGO_URL

// export default async function connectDb(){
//     try {
//         const db = await mongoose.connect(MONGO_URL)
//         console.log(`Database connected`)
//     } catch (error) {
//         console.log(`Database connection failed ${error}`)
//     }
// }

// Another production way

import mongoose from 'mongoose'

const MONGO_URI = process.env.MONGO_URI

if(!MONGO_URI){
    throw new Error("Please define the MongoDb uri env variable")
}

let cached = global.mongoose;

if(!cached){
    cached = global.mongoose = {conn: null, promise: null}
}

async function connectDb() {
    if(cached.conn){
        return cached.conn
    }
    if(!cached.promise){
        cached.promise = await mongoose.connect(MONGO_URI).then((mongoose) => {
            return mongoose
        })
    }

    try {
        cached.conn = await cached.promise
    } catch (error) {
       cached.promise = null
       throw error 
    }
    return cached.conn
}

export default connectDb;