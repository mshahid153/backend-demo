import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(
            `mongodb+srv://mdcruze:0987poiu@demo.r9gte39.mongodb.net/demo`);
        console.log(`MONGODB CONNECTED!! DB HOST : ${connectionInstance.connection.host} `);
    } catch (error) {
        console.error(`MONGODB connection ERROR: ${error}`);
    }
}

export default connectDB