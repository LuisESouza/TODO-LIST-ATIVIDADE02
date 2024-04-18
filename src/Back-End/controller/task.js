const express = require("express");
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const task = require("../model/task");
var cors = require('cors');

const setup = async () => {
    const mongod = await MongoMemoryServer.create();
    await mongoose.connect(`${mongod.getUri()}banco`);

    const app = express();

    app.use(cors());
    app.use(express.json());

    app.get("/", async (req, res) => {
        const tasks = await task.find();
        res.json(tasks);
        console.log(tasks);
        //res.send("Online");
    });

    app.post("/tasks", async (req, res) => {
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
        console.log("Salvando Task");
        res.send(newTask);
    });

    app.post("/category", async (req, res) => {
        console.log(req.body);
        const {
            nome,
            color
        } = req.body;

        const newTask = new task({
            nameCategory: nome,
            color: color
        });
        await newTask.save();
        console.log("Salvando Categoria");
        res.send(newTask);
    });

    app.listen(3001, () => {
        console.log("http://localhost:3001");
    });
};

setup();