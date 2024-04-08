const section = document.querySelector(".contents");
let addTaskForm = null;
let isMenuOpen = false;

function renderIndex(){
    const markup =`
    <div class="content-home">
        <img src="assets/image copy.png" alt="">
        <p class="textLarge">What do you want to do today?</p>
        <p class="textSmall">Tap + to add your tasks</p>
    </div>
    `

    section.innerHTML = markup;
}


function renderAddTask() {
    const markup = `
        <form id="add-task-form">
            <h3>Add Task</h3>
            <div class="form-inputs">
                <input type="text" placeholder="name task">
                <input type="text" placeholder="description task">
            </div>
            <div class="form-buttons">
                <button>
                    Timer
                    <img src="" alt="">
                </button>
                <button>
                    Tag
                    <img src="" alt="">
                </button>
                <button>
                    Flag
                    <img src="" alt="">
                </button>
            </div>
        </form>
    `;
    section.innerHTML = markup;
    addTaskForm = document.getElementById("add-task-form");
}

function renderCategory(){

}

function toggleAddTaskMenu() {
    if (!isMenuOpen) {
        renderAddTask();
        isMenuOpen = true;
    } else {
        section.removeChild(addTaskForm);
        renderIndex();
        isMenuOpen = false;
    }
}

module.exports = {
    renderIndex,
    toggleAddTaskMenu
};