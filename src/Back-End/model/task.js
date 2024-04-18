const { Schema } = require("mongoose");
const mongoose = require('mongoose');

const schemaCategory = new Schema({
    categoryTask: String,
    color: String,
})

const schemaTask = new Schema({
    nome: String,
    description: String,
    date: Date,
    taskPriority: Number,
    categoryTask: schemaCategory,
    taskReady: Boolean,
});

const modeloTask = mongoose.model('Task', schemaTask);

module.exports = modeloTask;