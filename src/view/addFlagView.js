class addFlagView{
    constructor(){
       
    }

    render(){
        const numOfButtons = [1,2,3,4,5,6,7, 8,9,10];
        
        return `
        <div class="task-priority" id="task-priority">
            <div class="task-priority-tittle">
                <h4 id="testandoFlag">Task Priority</h4>
            </div>
            
            <span class="line"></span>

            <div class="table-task">
                ${
                    numOfButtons.map((i) => {
                        return`
                        <button value="${i}">
                           <i class="fas fa-flag"></i>
                           <p>${i}</p>
                        </button>`
                        ;
                    }).join('')
               }
            </div>

            <div class="div-buttonDown">
                <button id="btn-cancel">Cancel</button>
                <button id="btn-save">Save</button>
            </div>
        </div>
        `
    }
}