const { Schema, model } = require("mongoose");

const schemaCategory = new Schema({
    categoryTask: String,
    color: String,
});

const schemaTask = new Schema({
    nome: String,
    description: String,
    date: Date,
    taskPriority: Number,
    categoryTask: { type: Schema.Types.ObjectId, ref: 'Category' },
    taskReady: Boolean,
});

const Task = model('Task', schemaTask);
const Category = model('Category', schemaCategory);

module.exports = {
    Task: Task,
    Category: Category
};