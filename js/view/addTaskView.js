class addTask{
    constructor(){
        
    }

    render(){
        return `
        <form class="form-control" id="add-task-form">
                <div class="form-tittle">
                    <h3>Add Task</h3>
                </div>
                
                <div class="form-inputs">
                    <input type="text" placeholder="name task" id="taskName">
                    <input type="text" placeholder="description task" id="taskDesc">
                </div>
                <div class="form-buttons">
                    <div>
                        <button class="" id="btn-stopwatch">
                            <i class="fas fa-stopwatch"></i>
                        </button>
                        
                        <button class="" id="btn-tag">
                        <i class="fas fa-tag"></i>
                        </button>

                        <button class="" id="btn-category">
                        <i class="fas fa-flag"></i>
                        </button>

                    </div>

                    <div class="form-submit">
                        <button>
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
        </form>
        `
    }
}