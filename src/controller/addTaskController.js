class addTaskController{
    constructor(){
        this.content = document.querySelector("#content");
        this.init();
    }

    init() {
        const View = new addTaskView();
        this.content.innerHTML = View.render();
    }
}