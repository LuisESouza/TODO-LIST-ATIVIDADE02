class addFlagController{
    constructor(){
        this.content = docment.querySelector("#content");
        init();
    }

    init() {
        const View = new addFlagView();
        this.content.innerHTML = View.render();
    }
}