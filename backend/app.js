const express = require("express");
const morgan = require("morgan");
const connectDB = require("./config/db.js");

// Import routes
const taskRoute = require("./routes/task.route.js");

// Import middleware
const errorHandler = require("./middleware/errorHandler.js");

const app = express();
require("dotenv").config();
connectDB();

app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api", taskRoute);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT 
const HOST = process.env.HOST 

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});

console.log("app.js is ready to use");

// API Endpoints
// http://127.0.0.1:3000/
// GET: api/tasks
// GET: api/tasks/:id
// POST: api/tasks
// PUT: api/tasks/:id
// DELETE: api/tasks/:id

