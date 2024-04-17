class addTaskController{
    
    constructor(){
        this.content = document.querySelector("#content");
        this.init();
    }

    init() {
        const View = new addTaskView();
        this.content.innerHTML = View.render();

        const form = document.querySelector("form");
        form.addEventListener("submit", (event)=>{
            event.preventDefault();
        })
        
        const btnTag = document.querySelector("#btn-tag");
        btnTag.addEventListener("click", ()=>{
            new Router().goTo("addCategory");
        });

        const btnFlag = document.querySelector("#btn-flag");
        btnFlag.addEventListener("click", ()=>{
            new Router().goTo("addFlag");
        });
    }
}