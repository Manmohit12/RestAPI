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
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>User API Documentation</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          max-width: 800px;
          margin: 40px auto;
          padding: 20px;
          line-height: 1.6;
          background-color: #f9f9f9;
          color: #333;
        }
        h1, h2 {
          color: #2c3e50;
        }
        code {
          background: #e0e0e0;
          padding: 2px 4px;
          border-radius: 4px;
        }
        pre {
          background: #f4f4f4;
          padding: 10px;
          border-left: 5px solid #ccc;
          overflow-x: auto;
        }
        .footer {
          margin-top: 40px;
          border-top: 1px solid #ccc;
          padding-top: 10px;
        }
      </style>
    </head>
    <body>
      <h1>📘 User REST API – Help Guide</h1>
      <p>Welcome to the User Management REST API. Below you'll find all available endpoints and their usage instructions.</p>

      <h2>🧾 Available Routes</h2>

      <h3>🔹 GET <code>/api/users</code></h3>
      <p>Retrieve a list of all users.</p>

      <h3>🔹 POST <code>/api/users</code></h3>
      <p>Create a new user. Send a JSON object in the request body. Example:</p>
      <pre><code>{
  "first_name": "Adela",
  "last_name": "Grute",
  "email": "agrute1@t-online.de",
  "gender": "Female",
  "Job title": "Project Manager"
}</code></pre>

      <h3>🔹 GET <code>/api/users/:id</code></h3>
      <p>Fetch details of a user by their unique <code>id</code>.</p>

      <h3>🔹 PATCH <code>/api/users/:id</code></h3>
      <p>Update a specific user's details using their <code>id</code>. Provide only the fields you want to update.</p>

      <h2>📌 Notes</h2>
      <ul>
        <li>Make sure your requests include the header: <code>Content-Type: application/json</code></li>
        <li>All endpoints return JSON responses</li>
      </ul>

      <div class="footer">
        <p>👨‍💻 Developed by <strong>Manmohit Singh</strong></p>
        <p>🔗 <a href="https://www.linkedin.com/in/manmohit-singh-967990281/" target="_blank">Connect on LinkedIn</a></p>
      </div>
    </body>
    </html>
  `);
});



// Routes
app.use('/api/users', userRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
