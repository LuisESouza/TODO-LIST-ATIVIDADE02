class createCategoryView{
    constructor() {}


    render() {
        const predefinedColors = [
            '#C9CC41','#66CC41',
            '#41CCA7', '#4181CC',
            '#41A2CC', '#CC8441', 
            '#9741CC', '#CC4173', 
            '#800080', '#8A2BE2', 
            '#D2691E', '#32CD32', 
            '#FF4500', '#00BFFF', 
            '#FF1493', '#008080', '#800000'
        ];
            let buttonsMarkup = '';
        
        predefinedColors.forEach(color => {
            buttonsMarkup += `<button style="background-color: ${color}" value="${color}"></button>`;
        });

        return`
        <form class="create-category">
            <div>
            <div class="create-category-tittle">
                <h4>Create new Category</h4>
            </div>

            <div class="form-inputs">
                <input type="text" placeholder="Category name">
            </div>

            <div class="category-icon">
                <p>Category Icon :</p>
                <button>Choose Icon from library</button>
            </div>

            <div class="category-color">
                <div class="category-color-tittle">
                    <p>Category Color :</p>
                </div>
                    
                <div class="container-colors">
                    ${buttonsMarkup}
                </div>
            </div>
            </div>
            <div class="create-category-buttons">
                <button id="btn-cancel">Cancel</button>
                <button id="btn-create">Create Category</button>
            </div>
        </form>
        `
    }
}