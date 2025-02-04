import mongoose from 'mongoose'

type ConnectionObject = {
    isConnected?: number;
}

const connection : ConnectionObject = {}

//after making a connection it will return a Promise , promise of type what, in that im not interested, so though i wrote <void>
async function dbConnect():Promise<void>{
    if(connection.isConnected){
        console.log("Already connected to Database")
        return
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '')

        connection.isConnected = db.connections[0].readyState //readystate is a number

        //todo --> log db.connection & db and check

        console.log("Db connected successfully")
    } catch (error) {
        console.log("Database connection failed", error)
        process.exit(1)
    }
}

export default dbConnect;