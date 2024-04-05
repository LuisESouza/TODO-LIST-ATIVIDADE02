import * as viewMenu from "../view/menuView.js"
// const express = require("express")
// const mongoose = require('mongoose')
// const MongoMemoryServer = require('mongodb-memory-server').MongoMemoryServer
// const task = require("../model/task")
//const viewMenu = require("../view/menuView");
const btnPlus = document.getElementById("btn-plus");

btnPlus.addEventListener("click", ()=>{
    viewMenu.toggleAddTaskMenu();
});

function start(){
    viewMenu.renderIndex();
}

start();