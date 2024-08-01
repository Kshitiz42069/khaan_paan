import mongoose from 'mongoose'

const connectTOMongoDB = async() =>{
    try {
        await mongoose.connect(process.env.Mongo_URI)
        console.log("database is connected")
    } catch (error) {
        console.log("error in connection with database")
    }
}

export default connectTOMongoDB;