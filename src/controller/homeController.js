class homeController{
    constructor(){
        this.content = document.querySelector("#content");
        this.init()
    }

    init() {
        const View = new homeView();
        this.content.innerHTML = View.render();
    }
}