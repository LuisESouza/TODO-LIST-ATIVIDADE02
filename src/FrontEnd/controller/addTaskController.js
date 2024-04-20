class addTaskController {

    constructor(flagValue) {
        this.content = document.querySelector("#content");
        this.flagValue = flagValue;
        this.init();
    }

    init() {
        const View = new addTaskView();
    
        this.content.innerHTML = View.render();
        
        const form = document.querySelector("form");
        form.addEventListener("submit", (event) => {
            event.preventDefault();
        })
    
        const btnTag = document.querySelector("#btn-tag");
        btnTag.addEventListener("click", () => {
            new Router().goTo("addCategory");
        });
    
        const btnFlag = document.querySelector("#btn-flag");
        btnFlag.addEventListener("click", () => {
            new Router().goTo("addFlag");
        });
        

        const btnSubmit = document.querySelector("#btn-submit");
        btnSubmit.addEventListener("click", async () => {
            try {
                let boolean = false;
                const inputName = document.querySelector("#taskName").value;
                const inputDesc = document.querySelector("#taskDesc").value;
                const flagValue = this.flagValue;

                if(flagValue == null || inputName.trim() == ""){
                    alert("Erro");
                }else{
                    const response = await fetch("http://localhost:3001/tasks", {
                    method: "POST",
                    body: JSON.stringify({
                        nome: inputName,
                        description: inputDesc,
                        //categoryTask: ,
                        taskPriority: flagValue,
                        taskReady: boolean,
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                if (response.ok) {
                    new Router().goTo("home");
                }
                }
            } catch (error) {
                console.log(error);
            }
        });
    }
    
}
