const section = document.querySelector(".contents");
const btnPlus = document.querySelector("#btn-plus");
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
            <form class="form-control" id="add-task-form">
                <div class="form-tittle">
                    <h3>Add Task</h3>
                </div>
                
                <div class="form-inputs">
                    <input type="text" placeholder="name task" id="taskName">
                    <input type="text" placeholder="description task" id="taskDesc">
                </div>
                <div class="form-buttons">
                    <div>
                        <button class="" id="btn-stopwatch">
                            <i class="fas fa-stopwatch"></i>
                        </button>
                        
                        <button class="" id="btn-flag">
                        <i class="fas fa-tag"></i>
                        </button>

                        <button class="" id="btn-flag">
                        <i class="fas fa-flag"></i>
                        </button>

                    </div>

                    <div class="form-submit">
                        <button>
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </form>
    `;
    section.innerHTML = markup;
    addTaskForm = document.getElementById("add-task-form");
}

function renderAddFlag(){
    const markup = `
        
    `
}



btnPlus.addEventListener("click", (event)=>{
    if (!isMenuOpen) {
        renderAddTask();
        isMenuOpen = true;
    } else {
        section.removeChild(addTaskForm);
        renderIndex();
        isMenuOpen = false;
    }
})

//renderIndex();