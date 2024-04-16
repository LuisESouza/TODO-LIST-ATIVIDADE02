class Router{
    constructor(){
        this.rotas = {
            'home': "homeController",
            'addTask': "addTaskController",
            'addFlag': "addFlagController",
            'addCategory':"chooseCategoryController",
            'createCategory':"createCategoryController"
        }
    }

    goTo(rota) {
        history.pushState({}, "", rota);
        eval(`new ${this.rotas[rota]}()`);
    }
}