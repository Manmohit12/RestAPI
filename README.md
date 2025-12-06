# User Management REST API

A simple Node.js REST API for managing user data, built with Express.js and MongoDB. This project provides CRUD operations for user resources, including creation, retrieval, updating, and deletion of user records.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete user records.
- **Data Validation**: Ensures unique email addresses and required fields.
- **Error Handling**: Custom middleware for handling 404 and server errors.
- **Web Interface**: Basic HTML pages for API status and documentation.
- **MongoDB Integration**: Uses Mongoose for schema definition and database interactions.
- **Environment Configuration**: Supports environment variables for sensitive data.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd project01
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   MONGO_URL=mongodb://localhost:27017/your-database-name
   PORT=8000
   ```

4. Start the server:
   ```bash
   npm start
   ```

The server will run on `http://localhost:8000` by default.

## Usage

- Visit `http://localhost:8000` for the API home page.
- Visit `http://localhost:8000/help` for API documentation and available endpoints.

## API Endpoints

All API endpoints are prefixed with `/api/users`. Ensure requests include `Content-Type: application/json` in headers.

### Get All Users
- **GET** `/api/users`
- Returns a list of all users.

### Create a New User
- **POST** `/api/users`
- Request Body Example:
  ```json
  {
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "gender": "Male",
    "job_title": "Developer"
  }
  ```
- Response: `201 Created` with user ID.

### Get User by ID
- **GET** `/api/users/:id`
- Returns details of a specific user.

### Update User by ID
- **PATCH** `/api/users/:id`
- Request Body: Only include fields to update.
- Response: Updated user data.

### Delete User by ID
- **DELETE** `/api/users/:id` (Note: Currently commented out in routes)
- Response: Confirmation of deletion.

## Technologies Used

- **Node.js**: JavaScript runtime.
- **Express.js**: Web framework for Node.js.
- **Mongoose**: ODM for MongoDB.
- **MongoDB**: NoSQL database.
- **dotenv**: Environment variable management.

## Deployment

This project is configured for deployment on Vercel. The `vercel.json` file specifies the build and routing settings.

## Contributing

Feel free to submit issues or pull requests for improvements.

## License

ISC License.
