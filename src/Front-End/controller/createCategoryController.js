class createCategoryController {
    constructor() {
        this.content = document.querySelector("#content");
        this.header = document.querySelector("header");
        this.footer = document.querySelector("footer")
        this.init();
    }

    init() {
        const View = new createCategoryView();
        this.content.innerHTML = View.render();

        const form = document.querySelector("form");
        form.addEventListener("submit", (event) => {
            event.preventDefault();
        })

        const btnCancel = document.querySelector("#btn-cancel");
        btnCancel.addEventListener("click", () => {
            this.footer.style.display = "block";
            this.header.style.display = "block";
            new Router().goTo("addCategory");
        })

        const btnCreate = document.querySelector("#btn-create");
        btnCreate.addEventListener("click", async () => {
            const inputValue = document.querySelector("input").value;
            if(inputValue==""){
                alert("informe um nome para a categoria");
            }else{
            const selectedColor = document.querySelector(".container-colors button.active").value;

            try {
                const response = await fetch("http://localhost:3001/category", {
                    method: "POST",
                    body: JSON.stringify({
                        categoryTask: inputValue,
                        color: selectedColor
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                if (response.ok) {
                    new Router().goTo("addCategory");
                    this.footer.style.display = "block";
                    this.header.style.display = "block";
                } else {
                    console.error('Erro ao criar categoria:', response.statusText);
                }
            } catch (error) {
                console.error('Erro ao criar categoria:', error);
            }
        }
        });

        const colorButtons = document.querySelectorAll(".container-colors button");
        colorButtons.forEach(button => {
            button.addEventListener("click", () => {
                colorButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
    }
}
