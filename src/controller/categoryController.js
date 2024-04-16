class chooseCategoryController{
    constructor(){
        this.content = document.querySelector("#content");
        this.init();
    }

    init() {
        const View = new chooseCategoryView();
        this.content.innerHTML = View.render();
    }
}