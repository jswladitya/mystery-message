import mongoose from 'mongoose'

type ConnectionObject = {
    isConnected?: number;
}

const connection : ConnectionObject = {}

//hamare pass jo value return hogi connection se wo ek value hoga & promise ke ander kya value ati he mujhe usse koi matlab nahi islie me use <void> likhunga
async function dbConnect():Promise<void>{
    if(connection.isConnected){
        console.log("Already connected to Database")
        return
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '')

        connection.isConnected = db.connections[0].readyState

        //todo --> db.connection & db dono ko clg karke dekho

        console.log("Db connected successfully")
    } catch (error) {
        console.log("Database connection failed", error)
        process.exit(1)
    }
}

export default dbConnect;