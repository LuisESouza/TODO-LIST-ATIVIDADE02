class categoryModel {
    constructor(){}

    async getCategory() {
        const apiUrl = "http://localhost:3001/category";
        try {
            const response = await fetch(apiUrl);
            const results = await response.json();

            console.log(results);

            return results;
        } catch(error) {
            console.log(error);
            return [];
        }
    }
}
