import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config({
    path:'./.env'
})

const url=process.env.MONGO_URL

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${url}`)
        console.log("MONGODB CONNECTION SUCCESSFUL!!!")
    } catch (error) {
        console.log("MONGODB CONNECTION FAILED ",error);
        process.exit(1);
    }
}

export default connectDB