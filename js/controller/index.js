import * as menuView from "../view/menuView.js";

const btnPlus = document.getElementById("btn-plus");

btnPlus.addEventListener("click", () => {
    menuView.toggleAddTaskMenu();
});


function start(){
    menuView.renderIndex();
}

start();