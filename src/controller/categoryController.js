class categoryController{
    constructor(){
        this.content = document.querySelector("#content");
        this.header = document.querySelector("header");
        this.footer = document.querySelector("footer");
        this.init();
    }

    init() {
        const View = new categoryView();
        this.content.innerHTML = View.render();

        const btnCreate = document.querySelector("#btn-createCategory");
        btnCreate.addEventListener("click", ()=>{
            this.footer.style.display = "none";
            this.header.style.display = "none";
            new Router().goTo("createCategory");
        })
    }
}