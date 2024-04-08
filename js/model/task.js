const { Schema } = require("mongoose");
const mongoose = require('mongoose');

const schemaTask = new Schema({
    id: Number,
    nome: String,
    description: String,
    date: Date,
    taskPriority: Number,
    categoryTask: String,
});

const modeloTask = mongoose.model('Task', schemaTask);

module.exports = modeloTask;