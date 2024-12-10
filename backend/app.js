const express = require("express");
const morgan = require("morgan");
const connectDB = require("./config/db.js");

// Import routes
const task = require("./routes/task.route.js");

// Import middleware
const errorHandler = require("./middleware/errorHandler.js");

const app = express();
require("dotenv").config();
connectDB();

app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api", task);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT // 3000
const HOST = process.env.HOST  //127.0.0.1

app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`); 
});

console.log("app.js is ready to use");

//api end points

//  http://127.0.0.1:5000/

//get
// api/tasks
// api/tasks/:id

//post
// api/tasks

//put
// api/tasks/:id

//delete
// api/tasks/:id


// {
//     "title": "Learn Node.js",
//     "description": "Complete tutorials and build a project",
//      "status": "TODO",
//     "priority": "HIGH",
//     "dueDate": "2024-12-15T00:00:00Z"
// }