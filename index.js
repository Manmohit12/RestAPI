import 'dotenv/config'
import express from 'express';
import userRouter from "./routes/user.js"
import mongoose from "mongoose"
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });



// Routes
app.use('/api/users', userRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
