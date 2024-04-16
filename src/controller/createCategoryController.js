class createCategoryController{
    constructor() {
        this.content = document.querySelector("content");
        this.init();
    }

    init() {
        const View = new createCategoryView();
        this.content.innerHTML = View.render();
    }

}