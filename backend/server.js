import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 8000; // Change the port number here

const __dirname = path.resolve(); // To get the current directory path

dotenv.config();

app.use(express.json()); // To parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

<<<<<<< HEAD
app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// app.get("/", (req, res) => {
//     res.send("Hello World");
//   });
=======
>>>>>>> d08fc50 (Updated test cases)

export const startServer = () => {
    server.listen(PORT, () => {
      connectToMongoDB();
      console.log(`Server is running on port ${PORT}`);
    });
};
  
if (process.env.NODE_ENV !== 'test') {
    startServer(); // Automatically start the server unless in a test environment
}

