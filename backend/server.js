import express from 'express'
import dotenv from "dotenv";
import connectTOMongoDB from './DB/connectToDB.js'
import authRoutes from './Routes/auth.route.js'

dotenv.config({ path: '../.env' });

const app = express();
app.use(express.json());

//users api

app.use("/api/auth",authRoutes);

//recipe storage api


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    connectTOMongoDB();
    console.log(`Server is running on port ${PORT}`);
});