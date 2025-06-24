import 'dotenv/config'
import express from 'express';
import mongoose from "mongoose";
import userRouter from "./routes/user.js";
import { errorHandler, notFound } from './middleware/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });

// Root & Help
app.get('/', (req, res) => {
  res.send("API running successfully");
});

app.get('/help', (req, res) => {
  res.send(`<!DOCTYPE html> ... (same HTML code)`);
});

// API Routes
app.use('/api/users', userRouter);

// Error Handlers (MUST be after routes)
app.use(notFound);
app.use(errorHandler);

// Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
