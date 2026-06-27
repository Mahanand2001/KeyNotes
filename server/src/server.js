// const express = require("express");
// const notesRoutes = require("./routes/notesRoutes.js")
import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from './middleware/rateLimiter.js'
import cors from 'cors'
import path from 'path'


dotenv.config();

const __dirname = path.resolve()


const app = express();


//middleware
app.use(express.json());

if(process.env.NODE_ENV !== "production"){
    app.use(cors({
    origin: "http://localhost:5173",
    }));
}

app.use(rateLimiter);


app.use('/api/notes', notesRoutes)


if(process.env.NODE_ENV === "production"){

    app.use(express.static(path.join(__dirname, "../client/dist")))

    app.get("*splat", (req, res) => {
        res.sendFile(path.join(__dirname, "../client/", "dist", "index.html"))
    })
}

connectDB().then(() => {app.listen(5001, () => {
    console.log("server is running on port 5001");
})})