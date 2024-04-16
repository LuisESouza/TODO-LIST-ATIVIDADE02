class indexController{
    constructor(){
        this.content = document.querySelector("#content");
        init()
    }

    init() {
        const View = new indexView();
        this.content.innerHTML = View.render();
    }
}