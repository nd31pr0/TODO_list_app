class Project {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.completed = false;
        
    }
    
    markCompleted() {
        this.completed = true;
    }

    toggleCompleted() {
        this.completed = !this.completed;
    }
}