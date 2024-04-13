const section = document.querySelector(".contents");
const btnPlus = document.querySelector("#btn-plus");
const body = document.querySelector("#body");


let addForms = null;
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
                        
                        <button class="" id="btn-tag">
                        <i class="fas fa-tag"></i>
                        </button>

                        <button class="" id="btn-category">
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
    const btnTag = document.querySelector("#btn-tag");
    btnTag.addEventListener("click", (event)=>{
        event.preventDefault();
        showMenusButton(renderChooseCategory());
    });

    const btnCategory = document.querySelector("#btn-category");
    btnCategory.addEventListener("click", (event)=>{
        event.preventDefault();
        showMenusButton(renderAddFlag());
    });
}











function renderAddFlag() {
    const numOfButtons = 10;
    let buttonsMarkup = '';

    for (let i = 1; i <= numOfButtons; i++) {
        buttonsMarkup += `
            <button value="${i}">
                <i class="fas fa-flag"></i>
                <p>${i}</p>
            </button>
        `;
    }

    const markup = `
        <div class="task-priority" id="task-priority">
            <div class="task-priority-tittle">
                <h4 id="testandoFlag">Task Priority</h4>
            </div>
            
            <span class="line"></span>

            <div class="table-task">
                ${buttonsMarkup}
            </div>

            <div class="div-buttonDown">
                <button>Cancel</button>
                <button>Save</button>
            </div>
        </div>
    `;

    section.insertAdjacentHTML("afterbegin", markup)

    const tableTask = document.querySelector(".table-task");
    tableTask.addEventListener("click", (event) => {
        const target = event.target.closest('button');
        if (target) {
            const taskPriority = document.querySelector("#testandoFlag");
            let priority = target.value;
            taskPriority.textContent = priority;
        }
    });
}








function renderChooseCategory() {
    const markup = `
        <div class="chooseCategory">
            <div>
                <div class="chooseCategory-tittle">
                    <h4>Choose Category</h4>
                </div>

                <span class="line"></span>

                <section class="chooseCategory-container">
                    <div class="Category">
                        <button id="btn-createCategory" style="cursor:pointer; background-color: #80FFD1; padding: 20px; border-radius: 10px; border: none;">
                            <i class="fas fa-plus" style="color: #00A369;"></i>
                        </button>   
                        <div class="text-category">
                            <p>Create New</p>
                        </div>
                    </div>
                </section>
            </div>

            <div class="div-buttonAddCategory">
                <button id="btn-addCategory">Add Category</button>
            </div>
        </div>
    `;

    section.innerHTML = markup;

    const btnCreateCat = document.querySelector("#btn-createCategory");
    btnCreateCat.addEventListener("click", (event) => {
        event.preventDefault();
        renderCreateCategory();
    });
}












function renderCreateCategory() {
    const predefinedColors = [
    '#C9CC41','#66CC41',
    '#41CCA7', '#4181CC',
    '#41A2CC', '#CC8441', 
    '#9741CC', '#CC4173', 
    '#800080', '#8A2BE2', 
    '#D2691E', '#32CD32', 
    '#FF4500', '#00BFFF', 
    '#FF1493', '#008080', '#800000'
];
    let buttonsMarkup = '';

    predefinedColors.forEach(color => {
        buttonsMarkup += `<button style="background-color: ${color}" value="${color}"></button>`;
    });

    const markup = `
    <form class="create-category">
        <div>
        <div class="create-category-tittle">
            <h4>Create new Category</h4>
        </div>

        <div class="form-inputs">
            <input type="text" placeholder="Category name">
        </div>

        <div class="category-icon">
            <p>Category Icon :</p>
            <button>Choose Icon from library</button>
        </div>

        <div class="category-color">
            <div class="category-color-tittle">
                <p>Category Color :</p>
            </div>
                
            <div class="container-colors">
                ${buttonsMarkup}
            </div>
        </div>
        </div>
        <div class="create-category-buttons">
            <button>Cancel</button>
            <button>Create Category</button>
        </div>
    </form>
    `;

    body.innerHTML = markup;
}



btnPlus.addEventListener("click", ()=>{
    showMenusButton(renderAddTask());
});

function showMenusButton(functions, ){
    if (!isMenuOpen) {
        functions;
        isMenuOpen = true;
    } 
}

renderIndex();