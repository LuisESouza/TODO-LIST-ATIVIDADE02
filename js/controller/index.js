const express = require("express");
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const task = require("../model/task");

const setup = async () => {
    const mongod = await MongoMemoryServer.create();
    await mongoose.connect(`${mongod.getUri()}banco`);

    const app = express();
    
    app.use(express.json());

    app.get("/", (req, res) => {
        res.send("Online");
    });

    app.post("/task", async (req, res) => {
        console.log(req.body);
        const {
            nome,
            description,
            date,
            taskPriority,
            categoryTask
        } = req.body;

        const newTask = new task({
            nome: nome,
            description: description,
            date: date,
            taskPriority: taskPriority,
            categoryTask: categoryTask
        });
        await newTask.save();
        console.log("Pessoa salva:");
        res.send(newTask);
    });

    app.listen(3001, () => {
        console.log("http://localhost:3001");
    });
};

setup();