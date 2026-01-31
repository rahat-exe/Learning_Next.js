import mongoose from 'mongoose'

const MONGODB_URL = process.env.MONGODB_URL;

let isConnected = false

async function connectDb(){
    // if(isConnected){
    //     console.log("MongoDb already connected!")
    //     return
    // }

    try {
      const db = mongoose.connect(MONGODB_URL);
      // isConnected = db.connections[0].readyState === 1
      // console.log("MongoDb connected", db)
      console.log("MongoDb connected")
    } catch (error) {
        console.error("MongoDb connection failed", error)
        throw error
    }
}

export default connectDb;