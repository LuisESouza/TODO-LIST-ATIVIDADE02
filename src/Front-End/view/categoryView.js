class categoryView{
    constructor(){}

    async render() {
        const Category = new categoryModel();
        const categoriesPromise = Category.getCategory(); // Obtém a Promise de getCategory()
    
        // Aguarda a resolução da Promise antes de prosseguir
        const categories = await categoriesPromise;
    
        return `
        <div class="chooseCategory">
            <div>
                <div class="chooseCategory-tittle">
                    <h4>Choose Category</h4>
                </div>
    
                <span class="line"></span>
    
                <section class="chooseCategory-container">
                    ${}
                    <div class="Category">
                        <button class="btn-createCategory" style="cursor:pointer; background-color: #80FFD1; padding: 20px; border-radius: 10px; border: none;">
                            <i class="bi bi-plus-lg" style="color: #00A369;"></i>
                        </button>   
                        <div class="text-category">
                            <p>Create New</p>
                        </div>
                    </div>
                </section>
            </div>
    
            <div class="div-buttonAddCategory">
                <button id="btn-addCategory">Add Category</button>
            </div>
        </div>`
    }    
}