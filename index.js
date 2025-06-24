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

app.get('/',(req,res)=>{
  res.send("Api Running successfully")
})

app.get('/help', (req, res) => {
  res.send(`
    <h1>📘 User API Help Guide</h1>
    <p>Welcome to the User REST API. Below are the available routes and their usage:</p>

    <h3>🔹 GET /api/users</h3>
    <p>Fetch all users from the database.</p>

    <h3>🔹 POST /api/users</h3>
    <p>Create a new user. Send a JSON body with user details.</p>

    <h3>🔹 GET /api/users/:id</h3>
    <p>Fetch a specific user by their <code>id</code>.</p>

    <h3>🔹 PATCH /api/users/:id</h3>
    <p>Update details of a specific user using their <code>id</code>. Send updated fields in JSON format.</p>

    <hr />
    <p>⚠️ Make sure to use proper headers like <code>Content-Type: application/json</code> when sending data.</p>
  `);
});


// Routes
app.use('/api/users', userRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
