import express from 'express'
import dotenv from "dotenv";
import connectTOMongoDB from './DB/connectToDB.js'
import authRoutes from './Routes/auth.route.js'
import wishRoutes from './Routes/wishlist.route.js'
import cookieParser from "cookie-parser";
import cors from 'cors'

dotenv.config();

const app = express();
const corsOptions = {
    credentials: true, // Allows cookies to be sent
};

app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOptions));

//users api

app.use("/api/auth",authRoutes);

//recipe storage api
app.use('/api',wishRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    connectTOMongoDB();
    console.log(`Server is running on port ${PORT}`);
});