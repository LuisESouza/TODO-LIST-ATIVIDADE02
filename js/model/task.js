const { Schema } = require("mongoose");
const mongoose = require('mongoose');

const schemaTask = new Schema({
    nome: String,
    description: String,
    date: Date,
    taskPriority: Number,
});

const modeloTask = mongoose.model('Task', schemaTask);

module.exports = modeloTask;