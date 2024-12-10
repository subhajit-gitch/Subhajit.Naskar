const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true, maxlength: 100 },
  description: { type: String, default: "" },
  status: {
    type: String,
    enum: ["TODO", "IN_PROGRESS", "COMPLETED"],
    default: "TODO",
  },
  priority: {
    type: String,
    enum: ["LOW", "MEDIUM", "HIGH"],
    default: "MEDIUM",
  },
  dueDate: { type: Date },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Task", taskSchema);

console.log("Task model is ready to use");



// {
//     title: String, // Required, max 100 characters
//     description: String, // Optional
//     status: String, // Enum: ['TODO', 'IN_PROGRESS', 'COMPLETED']
//     priority: String, // Enum: ['LOW', 'MEDIUM', 'HIGH']
//     dueDate: Date // Optional
//   }
  
