class addFlagController{
    constructor(){
     this.content = document.querySelector("#content");
     this.init();
    }

    init() {
        const View = new addFlagView();
        this.content.innerHTML = View.render();
    }
}