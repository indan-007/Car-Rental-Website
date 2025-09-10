import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";

// Initialize Express App
const app = express()

// Connect Database
await connectDB()

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res)=> res.send("Server is running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));
