class addFlagController{
    constructor(){
        this.content = docment.querySelector("#content");
        this.init();
    }

    init() {
        const View = new addFlagView();
        this.content.innerHTML = View.render();
    }
}