class taskModel {
    constructor() {}

    async getTask() {
        const apiUrl = `http://localhost:3001/tasks`;
        try {
            const response = await fetch(apiUrl);
            if (response.ok) {
                const data = await response.json();
                return data;
            } else {
                return [];
            }
        } catch (error) {
            console.log(error);
            return [];
        }
    }
}
