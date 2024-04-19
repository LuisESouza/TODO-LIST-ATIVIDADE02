class addFlagController{
    constructor(){
     this.content = document.querySelector("#content");
     this.init();
    }

    init() {
        const View = new addFlagView();
        this.content.innerHTML = View.render();

        const btnCancel = document.querySelector("#btn-cancel");
        btnCancel.addEventListener("click", () => {
            new Router().goTo("addTask");
        })

        const btnSave = document.querySelector("btn-save");
        btnSave.addEventListener("click", () => {
            
        })
    }
}