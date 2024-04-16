class addFlagView{
    constructor(){
       
    }

    render(){
        const numOfButtons = 10;
    
        let buttonsMarkup = numOfButtons.map((i) => {
            return `
                <button value="${i}">
                    <i class="fas fa-flag"></i>
                    <p>${i}</p>
                </button>
            `;
        })
        
        return `
        <div class="task-priority" id="task-priority">
            <div class="task-priority-tittle">
                <h4 id="testandoFlag">Task Priority</h4>
            </div>
            
            <span class="line"></span>

            <div class="table-task">
                ${buttonsMarkup}
            </div>

            <div class="div-buttonDown">
                <button>Cancel</button>
                <button>Save</button>
            </div>
        </div>
        `
    }
}