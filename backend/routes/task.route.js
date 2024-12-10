const express = require("express");

// Import model
const Task = require('../models/task.model.js');
const { validateTaskInput } = require("../middleware/validators.js");

const router = express.Router();

// Get all tasks
router.get("/tasks", async (req, res) => {

    try {
        const { status, priority, sort = 'createdAt', order = 'asc', limit = 10, page = 1 } = req.query;

        const filters = { isDeleted: false };
        if (status) filters.status = status;
        if (priority) filters.priority = priority;

        const tasks = await Task.find(filters)
            .sort({ [sort]: order === 'asc' ? 1 : -1 })
            .limit(Number(limit))
            .skip((Number(page) - 1) * Number(limit));

        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get task by ID
router.get("/tasks/:id", async (req, res) => {

    try {
        const task = await Task.findOne({ _id: req.params.id, isDeleted: false });
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a task
router.post("/tasks", validateTaskInput, async (req, res) => {
    
    try {
        const task = new Task(req.body);
        const savedTask = await task.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update task
router.put("/tasks/:id", validateTaskInput, async (req, res) => {
    
    try {
        const updatedTask = await Task.findOneAndUpdate(
            { _id: req.params.id, isDeleted: false },
            { ...req.body, updatedAt: new Date() },
            { new: true, runValidators: true }
        );
        if (!updatedTask) return res.status(404).json({ message: 'Task not found' });
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete task (soft delete)
router.delete("/tasks/:id", async (req, res) => {

    try {
        const task = await Task.findOneAndUpdate(
            { _id: req.params.id },
            { isDeleted: true },
            { new: true }
        );
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

console.log("Task Router is ready to use");
  