class Project {
    constructor(name) {
      this.name = name;
      this.toDos = [];
    }
  
    addTodo(todo) {
      if (todo instanceof Todo) {
        this.toDos.push(todo);
      } else {
        throw new Error('Can only add instances of Todo to a project');
      }
    }
  
    removeTodo(todoIndex) {
      this.toDos.splice(todoIndex, 1);
    }
  
    // Additional methods to modify todos in the project can be added here
  }
  
  export default Project;