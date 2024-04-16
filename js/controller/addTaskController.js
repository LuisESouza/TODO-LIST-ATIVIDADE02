class addTaskController{
    constructor(){
        this.content = document.querySelector("#content");
        init();
    }

    init() {
        const View = new addTask();
        this.content.innerHTML = View.render;
    }
}