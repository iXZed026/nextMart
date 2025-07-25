import mongoose from "mongoose";

const uri = process.env.MONGODB_URI as string
if (!uri) throw new Error("Check your conection string");

let isConnected: boolean = false;

export async function connectToDatabase() {
    if (isConnected) console.log("Database is already connected.")
    try {
        await mongoose.connect(uri, { dbName: "nextmart" })
        isConnected = true;
        console.log("is connected")
    }
    catch (err) {
        console.log("An error occurred while connecting to the database. ", err)
        // process.exit(1)
    }

}
