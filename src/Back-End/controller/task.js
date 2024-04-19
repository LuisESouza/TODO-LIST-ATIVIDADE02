const express = require("express");
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { Task, Category } = require("../model/task");
var cors = require('cors');

const setup = async () => {
    const mongod = await MongoMemoryServer.create();
    await mongoose.connect(`${mongod.getUri()}banco`);
    const app = express();

    const corsOptions = {
        origin: 'http://127.0.0.1:3000, http://127.0.0.1:3000/category, http://127.0.0.1:3000/tasks',
        methods: 'GET,POST',
        allowedHeaders: 'Content-Type,Authorization',
    };
    app.use(cors(corsOptions));
    app.use(express.json());

    app.get("/tasks", async (req, res) => {
        const tasks = await Task.find();
        res.json(tasks);
    });

    app.get("/category", async(req, res)=>{
        const category = await Category.find();
        res.json(category);
    })

    app.post("/tasks", async (req, res) => {
        console.log(req.body);
        const {
            nome,
            description,
            date,
            taskPriority,
            categoryTask
        } = req.body;

        const newTask = new Task({
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


    app.post("/category", async (req, res) =>{
        console.log(req.body);
        const{
            categoryTask,
            color
        } = req.body;

        const newCategory = new Category({
            categoryTask: categoryTask,
            color: color,
        });
        await newCategory.save();
        console.log("Salvando Categoria");
        res.send(newCategory);
    });

    app.listen(3001, () => {
        console.log("http://localhost:3001");
    });
};

setup();
